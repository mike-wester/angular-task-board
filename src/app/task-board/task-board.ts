import { Component } from '@angular/core';

import { Task } from '../task/task';

@Component({
  imports: [ Task ],
  selector: 'app-task-board',
  styleUrl: './task-board.less',
  templateUrl: './task-board.html',
})
export class TaskBoard {}
