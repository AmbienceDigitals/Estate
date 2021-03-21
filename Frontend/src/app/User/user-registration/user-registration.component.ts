import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  user:any = {};

  // Using Form Builder
  constructor(private fb: FormBuilder) { }

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
  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(8)]],
      mobile: [null, [Validators.required, Validators.maxLength(12)]]
    }, {validators: this.passwordMatchingValidator});
  }

  //  Cross fieldd validator
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

  onSubmit(): void {
    console.log(this.registrationForm.value);
    this.user = Object.assign(this.user, this.registrationForm.value);
    this.addUser(this.user);
    this.registrationForm.reset();

  }

  addUser(user) {
    let users = [];

    // conditional statement to check if local storage already had 'users
    if(localStorage.getItem('Users')) {
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
