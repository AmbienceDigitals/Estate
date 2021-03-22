import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }


addUser(user: User): void {
  let users = [];

  // conditional statement to check if local storage already had 'users
  if (localStorage.getItem('Users')) {
    // json.parse to convert json to string
    users = JSON.parse(localStorage.getItem('Users'));

    // using rest parameter (spread syntax) to add new user to the array of existing users
    users = [user, ...users];
  } else {
    // if no pre existing users, add new user to the array
    users = [user];
  }
  // using local storage to store form values
  localStorage.setItem('Users', JSON.stringify(users));
}

}
