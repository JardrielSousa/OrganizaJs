import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingReadComponent } from './scheduling-read.component';

describe('SchedulingReadComponent', () => {
  let component: SchedulingReadComponent;
  let fixture: ComponentFixture<SchedulingReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulingReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
