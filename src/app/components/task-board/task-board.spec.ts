import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TaskBoard} from './task-board';
import {TaskService} from '../../services/task-service';

describe('TaskBoard', () => {
    let component: TaskBoard;
    let fixture: ComponentFixture<TaskBoard>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TaskBoard],
            providers: [
                {
                    provide: TaskService,
                    useValue: {
                        getAllTasks: async () => [],
                    },
                },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(TaskBoard);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
