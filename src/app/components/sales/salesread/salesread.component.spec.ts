import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesreadComponent } from './salesread.component';

describe('SalesreadComponent', () => {
  let component: SalesreadComponent;
  let fixture: ComponentFixture<SalesreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
