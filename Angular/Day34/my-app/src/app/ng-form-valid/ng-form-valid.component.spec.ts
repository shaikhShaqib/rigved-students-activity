import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFormValidComponent } from './ng-form-valid.component';

describe('NgFormValidComponent', () => {
  let component: NgFormValidComponent;
  let fixture: ComponentFixture<NgFormValidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFormValidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFormValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
