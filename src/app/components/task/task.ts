import { Component, input } from '@angular/core';

import { TaskInfo } from '../../interfaces/task-info';

@Component({
  imports: [],
  selector: 'app-task',
  styleUrl: './task.less',
  templateUrl: './task.html',
})
export class Task {
  task = input.required<TaskInfo>();
}
