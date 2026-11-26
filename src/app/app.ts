import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faSquareGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { TaskBoard } from './components/task-board/task-board';

@Component({
    imports: [FaIconComponent, TaskBoard],
    selector: 'app-root',
    styleUrl: './app.less',
    templateUrl: './app.html',
})
export class App {
    protected readonly title = signal('angular-taskboard');
    protected readonly faUser = faUser;
    protected readonly faLinkedin = faLinkedin;
    protected readonly faSquareGithub = faSquareGithub;
    protected readonly faStackOverflow = faStackOverflow;
}
