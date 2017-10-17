import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 import { HomeFavComponent } from './home-fav.component';
 import { SearchComponent } from './search.component';
 import { TabularDataComponent } from './tabulardata.component';
// import { HeroDetailComponent }  from './hero-detail.component';


const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home',  component: HomeFavComponent },
   { path: 'search',     component: SearchComponent },
   { path: 'datatables',     component: TabularDataComponent }
//   { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
