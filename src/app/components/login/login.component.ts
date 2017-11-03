import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app_login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public model: UserModel;
  public username: string;


  constructor() { }

  ngOnInit() {
    this.model = new UserModel();
  }

  login() {
    console.log(this.model);
    localStorage.setItem('currentUser', JSON.stringify(this.model));
  }
}

export class UserModel {
  username: string;
  password: string;
}
