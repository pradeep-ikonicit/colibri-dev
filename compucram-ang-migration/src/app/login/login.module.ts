import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginTPLComponent } from './login-tpl/login-tpl.component';
import { PasswordTPLComponent } from './password-tpl/password-tpl.component';
import { ForgotTPLComponent } from './forgot-tpl/forgot-tpl.component';



@NgModule({
  declarations: [
    LoginTPLComponent,
    PasswordTPLComponent,
    ForgotTPLComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginTPLComponent,
    PasswordTPLComponent,
    ForgotTPLComponent
  ],
})
export class LoginModule { }
