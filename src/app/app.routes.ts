import {Routes} from '@angular/router';

import {TaskBoard} from './components/task-board/task-board';
import {TaskDetails} from './components/task-details/task-details';

export const routes: Routes = [
    {
        path: '',
        component: TaskBoard,
        title: 'Task Board',
    },
    {
        path: 'details/:id',
        component: TaskDetails,
        title: 'Task details',
    },
];
