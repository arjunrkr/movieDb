import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 import { HomeFavComponent } from './home-fav.component';
 import { SearchComponent } from './movies/search.component';
 import { MusicComponent } from './music/music.component';
 import { TabularDataComponent } from './datatable/tabulardata.component';
//  import { MapsComponent } from './maps/maps.component';
// import { HeroDetailComponent }  from './hero-detail.component';


const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home',  component: HomeFavComponent },
   { path: 'search',     component: SearchComponent },
   { path: 'music',     component: MusicComponent },
   { path: 'datatables',     component: TabularDataComponent },
  //  { path: 'maps',     component: MapsComponent }
//   { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
