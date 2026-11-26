import {ChangeDetectorRef, Component, inject} from '@angular/core';

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
    private readonly changeDetectorRef = inject(ChangeDetectorRef);
    public taskList: TaskInfo[] = [];
    public taskService: TaskService = inject(TaskService);
    public filteredTaskList: TaskInfo[] = [];

    constructor() {
        this.taskService.getAllTasks().then((taskList: TaskInfo[]) => {
            this.taskList = taskList;
            this.filteredTaskList = taskList;
            this.changeDetectorRef.markForCheck();
        });
    }

    filterResults(searchText: string) {
        if (!searchText) {
            this.taskList = this.taskList;
            return;
        }

        this.filteredTaskList = this.taskList.filter((taskList) =>
            taskList?.name.toLowerCase().includes(searchText.toLowerCase()),
        );
    }
}
