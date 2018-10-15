import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {LoaderComponent} from './loader/loader.component';
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
import { NotFoundComponent } from './not-found/not-found.component';
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
    LoaderComponent,
    HomeComponent,
    NotFoundComponent,
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
