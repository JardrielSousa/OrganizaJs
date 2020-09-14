import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesdeleteComponent } from './salesdelete.component';

describe('SalesdeleteComponent', () => {
  let component: SalesdeleteComponent;
  let fixture: ComponentFixture<SalesdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
