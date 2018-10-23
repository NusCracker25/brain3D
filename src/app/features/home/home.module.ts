import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LoaderComponent } from '@shared/mm3d/loader/loader.component';
import { HomeComponent } from './home/home.component';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule
} from '@angular/material';
import {
  FormsModule,
  // NgForm,
  ReactiveFormsModule
} from '@angular/forms';

import {
  MatFormFieldModule
} from '@angular/material/form-field';

import { LayoutModule } from '@angular/cdk/layout';
import { IntroductionComponent } from './introduction/introduction.component';
import { CreditsComponent } from './credits/credits.component';
import { JoinComponent } from './join/join.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    IntroductionComponent,
    CreditsComponent,
    JoinComponent,
    NotFoundComponent
  ],
  exports: [
    HomeComponent,
    NotFoundComponent
  ]
})
export class HomeModule { }
