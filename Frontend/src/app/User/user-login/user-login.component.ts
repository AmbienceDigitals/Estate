import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/Service/Alertify.service';
import { AuthService } from 'src/app/Service/auth.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userName: string;
  password: string;

  constructor(private authService: AuthService,
              private alert: AlertifyService,
              private router: Router) { }

  ngOnInit(): void {
  }

    onLogin(loginForm: NgForm): void {
      console.log(loginForm.value);
      const token: any = this.authService.authUser(loginForm.value);
      if (token) {
        localStorage.setItem('token', token.userName);
        this.alert.success('login Successful');

        // navigation back to the homepage on successful log in
        this.router.navigate(['/']);
      } else {
        this.alert.error('Login not successful');
      }
    }
}
