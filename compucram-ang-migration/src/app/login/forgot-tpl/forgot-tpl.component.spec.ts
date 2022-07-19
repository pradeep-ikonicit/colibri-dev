import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotTPLComponent } from './forgot-tpl.component';

describe('ForgotTPLComponent', () => {
  let component: ForgotTPLComponent;
  let fixture: ComponentFixture<ForgotTPLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotTPLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotTPLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
