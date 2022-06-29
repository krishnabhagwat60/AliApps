import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesupplierComponent } from './managesupplier.component';

describe('ManagesupplierComponent', () => {
  let component: ManagesupplierComponent;
  let fixture: ComponentFixture<ManagesupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagesupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
