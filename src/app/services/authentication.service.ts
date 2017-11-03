import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() { }

  logout() {
    localStorage.removeItem('currentUser');
  }

  login(userName, Pwd) {
     localStorage.setItem('currentUser', JSON.stringify(''));
  }

}
