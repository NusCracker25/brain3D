import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@home/home/home.component';
import { NotFoundComponent } from '@home/not-found/not-found.component';

const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent,
      children: [
        {
          path: '404',
          component: NotFoundComponent
        }
      ]
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
