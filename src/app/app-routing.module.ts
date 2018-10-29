import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
    // component: NotFoundComponent
  },
  {
    path: 'home',
    loadChildren: './features/home/home.module#HomeModule'
  },
  // {
  //   path: 'user',
  //   loadChildren: './features/user/user.module#UserModule'
  // },
  {
    path: '**',
    redirectTo: '404'
    // component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
