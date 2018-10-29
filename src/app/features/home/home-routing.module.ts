import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@home/home/home.component';
import { NotFoundComponent } from '@home/not-found/not-found.component';
import { CreditsComponent } from '@home/credits/credits.component';
import { IntroductionComponent } from '@home/introduction/introduction.component';
import { JoinComponent } from '@home/join/join.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      children: [
        {
          path: '',
          component: IntroductionComponent,
        },
        {
          path: 'credits',
          component: CreditsComponent
        },
        {
          path: 'start',
          component: JoinComponent
        },
        {
          path: 'join',
          component: JoinComponent
        },
        {
          path: 'user',
          loadChildren: '../user/user.module#UserModule'
        },
        {
          path: '404',
          component: NotFoundComponent
        }
      ]
    },
    {
      path: 'user',
      loadChildren: '../features/user/user.module#UserModule'
    },
    {
      path: '**',
      redirectTo: 'home/404'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
