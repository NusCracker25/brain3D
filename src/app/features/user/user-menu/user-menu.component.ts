import { Component, OnInit } from '@angular/core';
import { SessionManagerService } from '@core/services/session-manager.service';
import { User } from '@core/definition/user';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  constructor(
    private session: SessionManagerService
  ) { }

  ngOnInit() {
  }

}
