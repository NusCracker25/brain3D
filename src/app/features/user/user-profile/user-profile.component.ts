import { Component, OnInit } from '@angular/core';
import { UserHttpService } from '@core/services/user-http.service';
import { User } from '@core/definition/user';
import { SessionManagerService } from '@core/services/session-manager.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: User = null;

  idForm: FormGroup;

  constructor(
    private sessionService: SessionManagerService,
    private userHTTP: UserHttpService,
    private formBuilder: FormBuilder
  ) {
    this.idForm = this.formBuilder.group({
        'firstName' : [null, Validators.required],
        'lastName' : [null, Validators.required],
       /* 'Address' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
        'DOB' : [null, Validators.required],
        'Gender':[null, Validators.required],
        'Blog':[null, Validators.required],  */
        'email': [null, Validators.compose([Validators.required, Validators.email])],
        // 'Password' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        // 'IsAccepted':[null]
      });
  }

  ngOnInit() {
    this.user = this.sessionService.user;
    console.log('retrieves user information for ' + this.user.username);
  }

  onSubmitID(){
    console.log('update id ' + JSON.stringify(this.user));
  }

}
