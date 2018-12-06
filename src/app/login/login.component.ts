import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  isShow:boolean =false;
  constructor() { }

  ngOnInit() {
  }

  go_(isShow_){
    this.isShow = isShow_;
  }
}
