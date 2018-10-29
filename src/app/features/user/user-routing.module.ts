import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotFoundComponent } from '@shared/mm3d/not-found/not-found.component';


const routes: Routes = [
    {
      path: 'user',
      component: UserProfileComponent,
      children: [
        {
          path: '404',
          component: NotFoundComponent
        }
      ]
    },
    {
      path: '**',
      redirectTo: 'user/404'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
