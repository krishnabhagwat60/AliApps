import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreesAddComponent } from './degrees-add.component';

describe('DegreesAddComponent', () => {
  let component: DegreesAddComponent;
  let fixture: ComponentFixture<DegreesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
