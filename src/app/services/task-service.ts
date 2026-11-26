import { isDevMode, Service } from '@angular/core';
import { getDataConnect, connectDataConnectEmulator } from 'firebase/data-connect';
import { connectorConfig, getTaskById, getTasks } from '@dataconnect/generated';
import { TaskInfo } from '../interfaces/task-info';
import { firebaseApp } from '../firebase-app';

@Service()
export class TaskService {
    private readonly dataConnect = getDataConnect(firebaseApp, connectorConfig);

    public constructor() {
        if (isDevMode()) {
            connectDataConnectEmulator(this.dataConnect, '127.0.0.1', 9399);
        }
    }

    public async getAllTasks(): Promise<TaskInfo[]> {
        const { data } = await getTasks(this.dataConnect);
        return data.tasks.map(({taskId, name, desc}) => ({
            taskId,
            name,
            desc: desc ?? null,
        }));
    }

    public async getTaskInfoById(id: number): Promise<TaskInfo | undefined> {
        const { data } = await getTaskById(this.dataConnect, { taskId: id });
        const task = data.task;
        return task
            ? {
                  taskId: task.taskId,
                  name: task.name,
                  desc: task.desc ?? null,
              }
            : undefined;
    }
}
