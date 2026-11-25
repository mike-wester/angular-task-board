import { Component, signal } from '@angular/core';

import { TaskBoard } from './components/task-board/task-board'

@Component({
  imports: [TaskBoard],
  selector: 'app-root',
  styleUrl: './app.less',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-taskboard');
}
