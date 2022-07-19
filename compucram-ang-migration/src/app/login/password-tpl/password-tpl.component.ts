import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-tpl',
  templateUrl: './password-tpl.component.html',
  styleUrls: ['./password-tpl.component.scss']
})
export class PasswordTPLComponent implements OnInit {
  authError:string='';
  
  constructor() { }

  ngOnInit(): void {
  }

}
