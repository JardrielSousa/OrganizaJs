import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingCrudComponent } from './scheduling-crud.component';

describe('SchedulingCrudComponent', () => {
  let component: SchedulingCrudComponent;
  let fixture: ComponentFixture<SchedulingCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulingCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
