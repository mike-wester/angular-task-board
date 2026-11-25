import { Service} from '@angular/core';
import { TaskInfo } from '../interfaces/task-info';


@Service()
export class TaskService {
    
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  protected taskList: TaskInfo[] = [
    {
      taskId: 0,
      name: 'Complete Task Board Application - Initilization',
      desc: 'Complete the total efforts to fully refine and implement the new Angular Task Board based off of the v22 Homes tutorial'
    },{
      taskId: 1,
      name: 'Complete Task Board Application - Infastructure',
      desc: 'Setup basic infastructure'
    },{
      taskId: 2,
      name: 'Complete Task Board Application - Redesign',
      desc: 'Redesign Task Layout and Header'
    },{
      taskId: 3,
      name: 'Complete Task Board Application - HTTP Addition',
      desc: 'Update Service to correctly use HTTP requests instead of hard coded'
    },{
      taskId: 4,
      name: 'Complete Task Board Application - Create more tasks',
      desc: 'Update Repo with more Tasks to do and what broadly defines a task'
    },
  ];

  getAllTasks(): TaskInfo[] {
    return this.taskList;
  }

  getTaskInfoById(taskId: number): TaskInfo | undefined {
    return this.taskList.find((task) => task.taskId === taskId);
  }
}
