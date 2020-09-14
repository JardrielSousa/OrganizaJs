import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalescreateComponent } from './salescreate.component';

describe('SalescreateComponent', () => {
  let component: SalescreateComponent;
  let fixture: ComponentFixture<SalescreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalescreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalescreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
