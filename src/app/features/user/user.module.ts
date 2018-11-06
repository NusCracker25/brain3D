import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';

import { Mm3dModule } from '@shared/mm3d/mm3d.module';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { B3dcoreModule } from '@core/b3dcore.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    // LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    Mm3dModule,
    B3dcoreModule

  ],
  declarations: [
    UserProfileComponent,
    UserMenuComponent
  ],
  exports: [
    UserMenuComponent
  ]
})
export class UserModule { }
