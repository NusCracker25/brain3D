import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar
 } from '@angular/material';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@core/definition/user';

import {AuthenticationService} from '@core/services/authentication.service';


@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})

export class JoinComponent implements OnInit {

  show = false;
  username: String = 'someone';
  _password: String = 'secret';

  loginForm: FormGroup;
  email = '';
  password: String = '';
  isAccepted = 0;

  constructor(
    private authenticateService: AuthenticationService,
    // private snackBar: MatSnackBar,
    private formbuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = formbuilder.group({
      FirstName: [null, Validators.required],
      LastName: [null, Validators.required],
      Address: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(30),
          Validators.maxLength(500)
        ])
      ],
      DOB: [null, Validators.required],
      Gender: [null, Validators.required],
      Blog: [null, Validators.required],
      // 'Email': [null, Validators.compose([Validators.required, Validators.email])],
      Email: [null, Validators.compose([Validators.required])],
      Password: [
        null,
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      IsAccepted: [null]
    });
  }

  ngOnInit() {}

  onLoginSubmit() {
    const userid = this.loginForm.get('Email').value;
    const password = this.loginForm.get('Password').value;
    console.log('tries to log in with ' + userid);
    // next here is to make the authenticate User a promise
    this.authenticateService.loginUser(userid, password)
      .subscribe(
        (response: User) => {
          console.log(response.username + ' is now logged ');
          this.router.navigate(['home/user/profile']);
        }
    );
  }

  onRegisterSubmit() {
    const userid = this.loginForm.get('Email').value;
    const password = this.loginForm.get('Password').value;

    console.log('tries to register with ' + userid);
    // next here is to make the authenticate User a promise
    this.authenticateService.registerUser(userid, password)
      .subscribe(
        (response: User) => {
          console.log(response.username + ' is now registered and lo ');
          this.router.navigate(['home/user/profile']);
        }
    );
  }
}
