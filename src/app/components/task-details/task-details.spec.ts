import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import {TaskDetails} from './task-details';
import {TaskService} from '../../services/task-service';

describe('TaskDetails', () => {
    let component: TaskDetails;
    let fixture: ComponentFixture<TaskDetails>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TaskDetails],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {snapshot: {params: {id: '1'}}},
                },
                {
                    provide: TaskService,
                    useValue: {
                        getTaskInfoById: async () => undefined,
                    },
                },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(TaskDetails);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
