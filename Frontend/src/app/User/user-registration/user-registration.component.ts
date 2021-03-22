import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/Service/Alertify.service';
import { UserServiceService } from 'src/app/Service/user-service.service';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  user: User;
  userSubmitted: boolean;

  // Using Form Builder
  constructor(private fb: FormBuilder,
              private userService: UserServiceService,
              private alert: AlertifyService) { }

  ngOnInit(): void {
    // using normal FormControl
    // this.registrationForm = new FormGroup({
    //   userName: new FormControl('', Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(12)])
    // }, this.passwordMatchingValidator);
    this.createRegistrationForm();

  }

  // Form Bulder
  createRegistrationForm(): void {
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(8)]],
      mobile: [null, [Validators.required, Validators.maxLength(12)]]
    }, {validators: this.passwordMatchingValidator});
  }

  //  Cross field validator
  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null : {notmatched: true};
  }

  // Getter method for form controls
  get userName(): FormControl {
    return this.registrationForm.get('userName') as FormControl;
  }
  get email(): FormControl {
    return this.registrationForm.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword(): FormControl {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile(): FormControl {
    return this.registrationForm.get('mobile') as FormControl;
  }

  onSubmit(): void  {
    //  to check if form values isnt null before submitting
    console.log(this.registrationForm.value);
    this.userSubmitted = true;
    if (this.registrationForm.valid) {
      // this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      //  using alertify to display sucess message
      this.alert.success('Congrats, You are successfully registered');
    } else {
      this.alert.error('Kindly provide the required fields');
    }

  }

  // method to map form values
  userData(): User {
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value,
    };
  }
}
