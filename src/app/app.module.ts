import {InjectionToken, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BlotterComponent} from './components/blotter/blotter.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {
  NbButtonModule,
  NbContextMenuModule,
  NbLayoutModule,
  NbMenuModule, NbMenuService,
  NbSidebarModule, NbSidebarService,
  NbThemeModule,
  NbThemeService
} from '@nebular/theme';
import {AppRoutingModule} from './app-routing.module';
import {DealsComponent} from './components/deals/deals.component';
import {ExportAsModule} from 'ngx-export-as';

@NgModule({
  declarations: [
    AppComponent,
    BlotterComponent,
    DealsComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    NbContextMenuModule,
    NbButtonModule,
    NbMenuModule.forRoot(),
    AppRoutingModule,
    ExportAsModule,
    NbLayoutModule,
    NbThemeModule.forRoot({ name: 'default' }),
  ],
  providers: [
    NbSidebarService,
    NbMenuService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
