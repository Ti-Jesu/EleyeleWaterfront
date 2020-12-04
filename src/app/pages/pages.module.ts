import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { RelaxComponent } from './relax/relax.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { LiveComponent } from './live/live.component';
import { WorkComponent } from './work/work.component';
import { InvestComponent } from './invest/invest.component';


@NgModule({
  declarations: [PagesComponent, RelaxComponent, ContactComponent, HomeComponent, PlayComponent, LiveComponent, WorkComponent, InvestComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,NgbModule
  ]
})
export class PagesModule { }
