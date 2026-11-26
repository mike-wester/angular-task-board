import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { TaskService } from './services/task-service';

describe('App', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [App],
            providers: [
                {
                    provide: TaskService,
                    useValue: {
                        getAllTasks: async () => [],
                        getTaskInfoById: async () => undefined,
                    },
                },
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should render title', async () => {
        const fixture = TestBed.createComponent(App);
        await fixture.whenStable();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-taskboard');
    });
});
