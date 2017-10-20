import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './my.interceptor';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeFavComponent } from './home-fav.component';
import { TabularDataComponent } from './datatable/tabulardata.component';
import { MusicComponent } from './music/music.component';
import { SearchComponent } from './movies/search.component';
import { MapModule } from './maps/map.module';
import {
  DataTableModule,
  SharedModule,
  SelectButtonModule,
  DropdownModule,
  TabViewModule,
} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    HomeFavComponent,
    SearchComponent,
    MusicComponent,
    TabularDataComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MapModule,
    BrowserAnimationsModule,
    DataTableModule,
    SharedModule,
    SelectButtonModule,
    DropdownModule,
    AlertModule.forRoot(),
    TabViewModule,
    FormsModule,
    AppRoutingModule,
    ToastModule.forRoot(),
    PopoverModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
