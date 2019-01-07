import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeGuard } from '@shared/guard/home.guards';

const routes: Routes = [
    {
      path: '',
      component: UserProfileComponent,
      canActivate: [HomeGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
