import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from '@home/home.module';
import { B3dcoreModule } from '@b3d/core/b3dcore/b3dcore.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    B3dcoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
