import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TaskBoard } from './task-board/task-board'

@Component({
  imports: [RouterOutlet, TaskBoard],
  selector: 'app-root',
  styleUrl: './app.less',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-taskboard');
}
