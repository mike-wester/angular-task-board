import { Service} from '@angular/core';
import { TaskInfo } from '../interfaces/task-info';


@Service()
export class TaskService {
    
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  protected taskList: TaskInfo[] = [
    {
      taskId: 0,
      name: 'Complete Task Board Application',
      desc: 'Complete the total efforts to fully refine and implement the new Angular Task Board'
    },{
      taskId: 0,
      name: 'Complete Task Board Application',
      desc: 'Complete the total efforts to fully refine and implement the new Angular Task Board'
    },{
      taskId: 0,
      name: 'Complete Task Board Application',
      desc: 'Complete the total efforts to fully refine and implement the new Angular Task Board'
    },{
      taskId: 0,
      name: 'Complete Task Board Application',
      desc: 'Complete the total efforts to fully refine and implement the new Angular Task Board'
    },{
      taskId: 0,
      name: 'Complete Task Board Application',
      desc: 'Complete the total efforts to fully refine and implement the new Angular Task Board'
    },
  ];

  getAllTasks(): TaskInfo[] {
    return this.taskList;
  }

  getTaskInfoById(taskId: number): TaskInfo | undefined {
    return this.taskList.find((task) => task.taskId === taskId);
  }
}
