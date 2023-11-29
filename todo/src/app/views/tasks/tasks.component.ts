import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from 'src/app/model/Task';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent {

  // Поля для таблицы (которые отображают данные из задачи - должно совпадать с названиями переменных класса)

  displayedColumns: string[] = ['color','id','title','date','priority','category',]

  // Контейнер - источник данных для таблицы
  dataSource!: MatTableDataSource<Task>

  tasks!: Task[]

  constructor(private dataHandler: DataHandlerService) {

  }

  ngOnInit(): void {

    this.dataHandler.taskSubject.subscribe(tasks => this.tasks = tasks)

    //  обязательно создать Датасорс для таблицы, в него присвается источник(БД, массив и т.д)
    this.dataSource = new MatTableDataSource();

    this.refreshTable();
  }

  toggleTaskCompleted(task: Task) {
      task.completed = !task.completed;
  }

  // В зависимости от статуса задачи - вернуть цвет названия
   getPriorityColor(task: Task):string {

    if(task.priority && task.priority.color) {
      return task.priority.color;
    }

  return 'fff';

}

  // Отображаем задачи с применением всех текущих условий (категория,  поиск, фильтры и т.д)
  private refreshTable(){

    // обновляем источник т.к данные массива tasks обновлись
    this.dataSource.data = this.tasks;
  }


}


