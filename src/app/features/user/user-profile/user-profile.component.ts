import { Component, OnInit } from '@angular/core';
import { UserHttpService } from '@core/services/user-http.service';
import { User } from '@core/definition/user';
import { SessionManagerService } from '@core/services/session-manager.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: User = null;
  users: User[] = null;

  constructor(
    private sessionService: SessionManagerService,
    private userHTTP: UserHttpService
  ) { }

  ngOnInit() {
    this.user = this.sessionService.user;
    this.userHTTP.getUsers().subscribe(
        response => {
          this.users = response;
        },
        error => {
          console.log(error);
        }
      );

    console.log('retrieves user information for ' + this.user);
    console.log('all users are ' + this.users);
  }

}
