import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TaskInfo } from '../../interfaces/task-info';

@Component({
    imports: [RouterLink],
    selector: 'app-task',
    styleUrl: './task.less',
    templateUrl: './task.html',
})
export class Task {
    public task = input.required<TaskInfo>();
}
