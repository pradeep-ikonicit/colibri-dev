import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-tpl',
  templateUrl: './login-tpl.component.html',
  styleUrls: ['./login-tpl.component.scss']
})
export class LoginTPLComponent implements OnInit {
  authError:string='';
  
  version:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
