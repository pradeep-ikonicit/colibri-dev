import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordTPLComponent } from './password-tpl.component';

describe('PasswordTPLComponent', () => {
  let component: PasswordTPLComponent;
  let fixture: ComponentFixture<PasswordTPLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordTPLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordTPLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
