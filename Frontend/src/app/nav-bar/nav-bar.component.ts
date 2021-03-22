import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loggedIn(): any {
    return localStorage.getItem('token');
  }

  onLogout(): any {
    // remove token from localStorage
    localStorage.removeItem('token');
  }

}
