import { InvestComponent } from './invest/invest.component';
import { WorkComponent } from './work/work.component';
import { LiveComponent } from './live/live.component';
import { PlayComponent } from './play/play.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RelaxComponent } from './relax/relax.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full' },
  {path: 'home', component: HomeComponent},
  { path: 'home/relax', component: RelaxComponent },
  { path: 'home/contact', component: ContactComponent },
  {path:'home/play', component:PlayComponent},
  {path:'home/live', component:LiveComponent},
  {path:'home/work', component:WorkComponent},
  {path:'home/invest', component:InvestComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
