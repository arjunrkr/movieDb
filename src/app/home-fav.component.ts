import { Component, OnInit } from '@angular/core';
import { MovieService } from './movies.service';
import { Movie } from './movie';
// import { Hero } from './hero';
// import { HeroService } from './hero.service';

@Component({
    selector: 'app-home',
    templateUrl: './home-fav.component.html',
    styleUrls: [],
    providers: [MovieService]
})

export class HomeFavComponent implements OnInit {
  title = 'My Dashboard';
  // heroes: Hero[] = [];

  // constructor(private heroService: HeroService) { }
  _postsArray: Movie[];

  constructor(private apiSerivce: MovieService) {
  }

  // getPosts(): void {

  //     this.apiSerivce.getPosts()
  //         .subscribe(
  //             resultArray => this._postsArray = resultArray,
  //             error => console.log('Error :: ' + error)
  //         )
  // }

  ngOnInit(): void {
    // this.apiSerivce.getPosts()
    //   .then(resultArray => this._postsArray = resultArray);
    // this.route.paramMap
    //     .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
    //     .subscribe(hero => this.hero = hero);      
  }
}
