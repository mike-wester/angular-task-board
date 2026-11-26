import {Component, inject} from '@angular/core';

import {Task} from '../task/task';
import {TaskInfo} from '../../interfaces/task-info';
import {TaskService} from '../../services/task-service';

@Component({
    imports: [Task],
    selector: 'app-task-board',
    styleUrl: './task-board.less',
    templateUrl: './task-board.html',
})
export class TaskBoard {
    public taskList: TaskInfo[] = [];
    public taskService: TaskService = inject(TaskService);

    constructor() {
        this.taskList = this.taskService.getAllTasks();
    }
}
