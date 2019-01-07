/** this one will be a service, therefore it must be injectable */
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SessionManagerService } from '@core/services/session-manager.service';

@Injectable()
export class HomeGuard implements CanActivate {
  constructor(private session: SessionManagerService, private router: Router) {}

  canActivate() {
    if (this.session.islogged) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
