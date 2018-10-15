import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/**
 * VR module is a lazy loaded module. It is loaded upon access to VR navigation mode.
 * this aims at offering a full VR experience for mind mapping with associated tools.
 * VR module can be activated if and only if navigation in a VR compatible environment.
 * and if user as selected the required mode.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class VrModule { }
