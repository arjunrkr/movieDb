import { NgModule } from '@angular/core';
import { MapsComponent } from './maps.component';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
import { GMapModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
// import { CheckboxModule } from 'primeng/primeng';
// import { DialogModule } from 'primeng/primeng';
// import { InputTextModule } from 'primeng/primeng';
// import { ButtonModule } from 'primeng/primeng';
// import { CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    MapsComponent,
  ],
  imports: [
    GrowlModule,
    GMapModule
    ],
  providers: [],
})
export class MapModule { }
