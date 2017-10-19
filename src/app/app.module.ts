import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/primeng';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './my.interceptor';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeFavComponent } from './home-fav.component';
import { TabularDataComponent } from './tabulardata.component';
import { MusicComponent } from './music.component';
import { SearchComponent } from './search.component';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { SelectButtonModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
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
    PopoverModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
