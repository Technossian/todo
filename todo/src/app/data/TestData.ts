import { Category } from "../model/Category";
import { Priority } from "../model/Priority";
import { Task } from "../model/Task";

export class TestData {
    static categories: Category[] = [
        {id:1, title: "Работа"},
        {id:2, title: "Семья"},
        {id:3, title: "Учеба"},
        {id:4, title: "Отдых"},
        {id:5, title: "Спорт"},
        {id:6, title: "Еда"},
        {id:7, title: "Финансы"},
        {id:8, title: "Гаджет"},
        {id:9, title: "Здоровье"},
        {id:10, title: "Авто"},
    ]

    static priorities: Priority[] = [
        {id:1, title: "Низкий", color: "#e5e5e5"},
        {id:2, title: "Средний",color: "#85d1b2"},
        {id:3, title: "Высокий",color: "#f1828d"},
        {id:4, title: "Мах", color: "#f1128d"},
    ]

    static tasks: Task[] = [
        {
            id:1, 
            title: "lorem",
            priority: TestData.priorities[3],
            completed: false,
            category: TestData.categories[0],
            date: new Date('2023-11-20')
        }, 
        {
            id:2, 
            title: "lorem2",
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[1],
            date: new Date('2023-11-20')
        },  
        {
            id:3, 
            title: "lorem3",
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[2],
            date: new Date('2023-11-20')
        },  
        {
            id:4, 
            title: "lorem4",
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[3],
            date: new Date('2023-11-20')
        },  
        {
            id:5, 
            title: "lorem5",
            completed: true,
            category: TestData.categories[4],
            date: new Date('2023-11-20')
        },  
        {
            id:6, 
            title: "lorem6",
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[5],
        },  
        {
            id:7, 
            title: "lorem7",
            priority: TestData.priorities[2],
            completed: false,
            date: new Date('2023-11-20')
        },  
        {
            id:8, 
            title: "lorem8",
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[7],
            date: new Date('2023-11-20')
        },  
        {
            id:9, 
            title: "lorem9",
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[8],
            date: new Date('2023-11-20')
        },  
        {
            id:10, 
            title: "lorem10",
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[9],
            date: new Date('2023-11-20')
        }, 
        {
            id:11, 
            title: "Работа Ибать",
            priority: TestData.priorities[3],
            completed: true,
            category: TestData.categories[0],
            date: new Date('2023-11-20')
        }, 
    ]
}


