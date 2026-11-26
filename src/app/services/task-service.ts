import {Service} from '@angular/core';
import {TaskInfo} from '../interfaces/task-info';

@Service()
export class TaskService {
    public url: string = 'http://localhost:3000/tasks';

    public async getAllTasks(): Promise<TaskInfo[]> {
        const data = await fetch(this.url);
        return (await data.json()) ?? [];
    }

    public async getTaskInfoById(id: number): Promise<TaskInfo | undefined> {
        const data = await fetch(`${this.url}/${id}`);
        const locationJson = await data.json();
        return locationJson ?? {};
    }
}
