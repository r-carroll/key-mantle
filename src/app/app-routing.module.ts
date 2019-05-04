import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'maintenance', component: MaintenanceComponent, data: { title: 'Maintenance Request'}},
  { path: '', component: HomeComponent, data: { title: 'Key & Mantle'} },
  { path: 'home', component: HomeComponent, data: { title: 'Key & Mantle'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
