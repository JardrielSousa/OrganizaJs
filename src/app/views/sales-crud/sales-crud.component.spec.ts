import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCrudComponent } from './sales-crud.component';

describe('SalesCrudComponent', () => {
  let component: SalesCrudComponent;
  let fixture: ComponentFixture<SalesCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
