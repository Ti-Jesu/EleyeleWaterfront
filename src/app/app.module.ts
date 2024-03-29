import { SiteFrameworkModule } from './site-framework/site-framework.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, SiteFrameworkModule, NgbModule,
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
