import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTPLComponent } from './login-tpl.component';

describe('LoginTPLComponent', () => {
  let component: LoginTPLComponent;
  let fixture: ComponentFixture<LoginTPLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTPLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTPLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
