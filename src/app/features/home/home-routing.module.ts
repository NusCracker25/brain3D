import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@home/home/home.component';
import { NotFoundComponent } from '@home/not-found/not-found.component';
import { CreditsComponent } from '@home/credits/credits.component';
import { IntroductionComponent } from '@home/introduction/introduction.component';
import { JoinComponent } from '@home/join/join.component';
import { View3DComponent } from '@features/m3d/threeD/view3-d/view3-d.component';

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
          path: 'map',
          component: View3DComponent
          // loadChildren: '../m3d/threeD/threeD.module#ThreeDModule'
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
    }
    ,
    // {
    //   path: 'user',
    //   loadChildren: '../user/user.module#UserModule'
    // },
    // {
    //   path: 'map',
    //   loadChildren: '../m3d/threeD/threeD.module#ThreeDModule'
    // },
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
