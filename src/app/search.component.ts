import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import * as _ from 'lodash';
// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { MovieService } from './movies.service';
import { Movie } from './movie';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: [],
    providers: [ MovieService ],
})

export class SearchComponent implements OnInit {
  title = 'My Dashboard';
  private searchTerms = new Subject<string>();
  movies: Observable<Movie[]>;
  constructor(
    private apiService: MovieService,
    private router: Router) {}

  search(term: string): void {
    // console.log('here function' + term);
    this.searchTerms.next(term);
  }

  public isFav(id: number): boolean {
    var data = [];
    data = JSON.parse(localStorage.getItem('FavMovies'));
    var found = _.find(data, { 'id': id });
    if (found) {
      console.log('hit');
      return true; // 'star glyphicon glyphicon-star';
    }else {
      console.log('no hit');
      return false; // 'star glyphicon glyphicon-star-empty';
    }
  }

  addRemoveFav(fav) {
    var data = [];
    data = JSON.parse(localStorage.getItem('FavMovies')) || [];
    console.log('--------------------------V-Current Collection-V------------------------------');
    console.log(data);
    var found = _.find(data, { 'id': fav.id }); // checks for film with id exist on current collection
    if (found) {
      data = _.reject(data, { 'id': fav.id }); // if film exist in fav list, its removed from current collection
    }else {
      data = _.concat(data, fav); // if not found, concat new film to current collection
    }
    console.log('---------------------------V-Final Collection-V--------------------------------');
    console.log(data);
    localStorage.setItem('FavMovies', JSON.stringify(data));
  }

  ngOnInit(): void {
    this.movies = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term =>  term
        ? this.apiService.search(term)
        : Observable.of<Movie[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Movie[]>([]);
      });

  }
}
