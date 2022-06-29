import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantTransactionsComponent } from './consultant-transactions.component';

describe('ConsultantTransactionsComponent', () => {
  let component: ConsultantTransactionsComponent;
  let fixture: ComponentFixture<ConsultantTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
