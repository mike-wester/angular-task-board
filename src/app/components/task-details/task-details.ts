import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {TaskService} from '../../services/task-service';
import {TaskInfo} from '../../interfaces/task-info';

@Component({
    imports: [],
    selector: 'app-task-details',
    styleUrl: './task-details.less',
    templateUrl: './task-details.html',
})
export class TaskDetails {
    private readonly changeDetectorRef = inject(ChangeDetectorRef);
    route: ActivatedRoute = inject(ActivatedRoute);
    taskService = inject(TaskService);
    task: TaskInfo | undefined;

    constructor() {
        const taskId = parseInt(this.route.snapshot.params['id'], 10);
        console.log(`TaskDetails: taskId=${taskId}`);
        this.taskService.getTaskInfoById(taskId).then((task) => {
            this.task = task;
            this.changeDetectorRef.markForCheck();
        });
    }
}
