import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {LoaderComponent} from '@shared/mm3d/loader/loader.component';
import { HomeComponent } from './home/home.component';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { NotFoundComponent } from '@shared/mm3d/not-found/not-found.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { CreditsComponent } from './credits/credits.component';
import { JoinComponent } from './join/join.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  declarations: [
    HomeComponent,
    IntroductionComponent,
    CreditsComponent,
    JoinComponent
  ],
  exports: [
    LoaderComponent,
    HomeComponent,
    NotFoundComponent
  ]
})
export class HomeModule { }
