import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreesEditComponent } from './degrees-edit.component';

describe('DegreesEditComponent', () => {
  let component: DegreesEditComponent;
  let fixture: ComponentFixture<DegreesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
