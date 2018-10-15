import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/**
 * 3D module is a lazy loaded one which is to be activated for map edition/brawosing
 * when user has selected 3D browsing.
 * 3D browsing is a 3D experience on desktop with usual screen rendering
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ThreeDModule { }
