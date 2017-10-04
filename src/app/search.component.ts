import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

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
  public like: number;

  movies: Observable<Movie[]>;
  constructor(
    private apiService: MovieService,
    private router: Router) {}

  search(term: string): void {
    // console.log(term);
    this.searchTerms.next(term);
  }
  addRemoveFav(value: number): number {
    if (value === 1) {
      this.like = 0;
    }else {
      this.like = 1;
    }
    return this.like;
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
    // this.searchTerms.subscribe((val) => {
    //     console.log(val);
    // })
  }
}
