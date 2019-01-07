import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { B3dcoreModule } from '@core/b3dcore.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Mm3dModule } from '@shared/mm3d/mm3d.module';
import { HomeGuard } from '@shared/guard/home.guards';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    B3dcoreModule,
    Mm3dModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    HomeGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
