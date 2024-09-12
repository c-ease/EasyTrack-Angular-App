import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})  

export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string; 
  // @Input() name?: string;  this might be undefined, we know
  // @Input() name: string | undefined;

  isAddingTask = false;

  // private taskService = new TasksService(); won't be shared among all the components
  constructor(private tasksService: TasksService) {}
  // shortcut to this.tasksService = tasksService; 
  //Dependency Ingection: we tell angular to create and maintain a single object of tasksService across all the components

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask(): void {
    this.isAddingTask = false;
  }

  // onAddTask(taskdata: NewTaskData) {
  //   this.isAddingTask = false
  // }

}
