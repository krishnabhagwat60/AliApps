import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTransactionsComponent } from './users-transactions.component';

describe('UsersTransactionsComponent', () => {
  let component: UsersTransactionsComponent;
  let fixture: ComponentFixture<UsersTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
