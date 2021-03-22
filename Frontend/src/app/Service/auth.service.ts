import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

  authUser(user: any): void {
    let UserArray = [];
    // conditional statement to check if local storage already had 'users
    if (localStorage.getItem('Users')) {
    // json.parse to convert json to string
    UserArray = JSON.parse(localStorage.getItem('Users'));
    }
    return UserArray.find((p) => p.userName === user.userName && p.password === user.password);
  }
}
