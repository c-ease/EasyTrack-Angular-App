import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule], //for ngModel
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {
  @Input({ required: true }) userId!: string; 

  @Output() close = new EventEmitter<void>();
  onCancel() {
    this.close.emit();
  }

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // Signal approach
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');
  // html template remain the same and would not need enteredTitle() because when using with two way binding, angular reads it for us without ()

  //@Output() add = new EventEmitter<NewTaskData>();
  private tasksService = inject(TasksService);

  onSubmit() {
    // this.add.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   date: this.enteredDate
    // })

    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, 
    this.userId);
    this.close.emit();
  }
}
