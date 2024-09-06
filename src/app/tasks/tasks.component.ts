import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})  
export class TasksComponent {

  @Input() name?: string; // this might be undefined, we know
  // @Input() name: string | undefined;

}
