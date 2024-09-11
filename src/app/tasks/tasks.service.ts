import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";


// makes it injectable into angular, to help it keep track when this is used by multiple components
@Injectable({providedIn: 'root'}) 
export class TasksService {
    // performs opr and or manages data needed by multiple components

    private tasks = [
        {
            id:'t1',
            userId: 'u1',
            title:'Master Angular',
            summary:'Learns concepts of Angular',
            dueDate:'2025-12-31'
        },
        {
            id:'t2',
            userId: 'u3',
            title:'Build First Prototype',
            summary:'First Prototype of online website',
            dueDate:'2024-05-31'
        },
        {
            id:'t3',
            userId: 'u3',
            title:'Prepare issue template',
            summary:'Describe issue temple to help the Project management',
            dueDate:'2024-06-15'
        },
    ];

    constructor() {
        // localstorage refers to browser storage
        const tasks = localStorage.getItem('tasks'); //local storage wuld only hold string  format
        if(tasks) {
            this.tasks = JSON.parse(tasks); //thus, needs parsing into JSON format
        }
    }

    getUserTasks(userId: string) {
        return this.tasks.filter( (task) => task.userId === userId );
    }
    
    addTask(taskdata: NewTaskData, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            title: taskdata.title,
            summary: taskdata.summary,
            dueDate: taskdata.date,
            userId: userId
        });
        this.saveTasks();
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}