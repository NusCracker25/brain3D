import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './services/authentication.service';
import { User } from './definition/user';
import { SessionManagerService } from './services/session-manager.service';
import { SecurityTknService } from './services/security-tkn.service';

import {HttpClientModule} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthenticationService,
    SessionManagerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityTknService,
      multi: true
    }
  ],
  exports: [
    User
  ]
})
export class B3dcoreModule { }
