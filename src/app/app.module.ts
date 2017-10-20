import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './my.interceptor';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeFavComponent } from './home-fav.component';
import { TabularDataComponent } from './datatable/tabulardata.component';
import { MusicComponent } from './music/music.component';
import { SearchComponent } from './movies/search.component';
import {
  DataTableModule,
  SharedModule,
  SelectButtonModule,
  DropdownModule,
  TabViewModule,
  GMapModule
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
    GMapModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
