import { Component, OnInit } from '@angular/core';
import { SessionManagerService } from '@core/services/session-manager.service';
import { UserHttpService } from '@core/services/user-http.service';

import {User} from '@core/definition/user';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  users: User[];

  constructor(
    private session: SessionManagerService,
    private user_http: UserHttpService
    ) { }

  ngOnInit() {
    if (this.session.islogged) {
    this.user_http.getUsers()
      .subscribe(
        users => this.users = users
      );
    }
  }

}
