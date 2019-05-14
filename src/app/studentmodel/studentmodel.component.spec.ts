import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmodelComponent } from './studentmodel.component';

describe('StudentmodelComponent', () => {
  let component: StudentmodelComponent;
  let fixture: ComponentFixture<StudentmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
