import { Component, OnInit } from '@angular/core';
import { faTachometerAlt, faSignOutAlt, faKey } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { AlertifyService } from '../Service/Alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  loggedinUser: string;
  dashboard: any = faTachometerAlt;
  profile: any = faUserCircle;
  password: any = faKey;
  logout: any = faSignOutAlt;

  isShown = false;

  constructor(private alert: AlertifyService) { }

  ngOnInit(): void {
  }


  loggedIn(): any {
    this.loggedinUser = localStorage.getItem('token');
    return this.loggedinUser;
  }

  onLogout(): any {
    // remove token from localStorage
    localStorage.removeItem('token');
    this.alert.success('You are logged Out');
  }


}
