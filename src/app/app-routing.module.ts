import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlotterComponent} from './components/blotter/blotter.component';
import {DealsComponent} from './components/deals/deals.component';

const routes: Routes = [
  {
    path: 'blotter',
    component: BlotterComponent,
  },
  {
    path: 'closed_deals',
    component: DealsComponent,
  },
  {path: '', redirectTo: '/blotter', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
