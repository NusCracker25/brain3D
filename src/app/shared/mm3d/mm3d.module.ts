import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoaderComponent } from './loader/loader.component';

/**
 * this module contains definition for map concepts and all related capabilities for edition and sp
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NotFoundComponent,
    LoaderComponent
  ],
  exports: [
    NotFoundComponent,
    LoaderComponent
  ]
})
export class Mm3dModule { }
