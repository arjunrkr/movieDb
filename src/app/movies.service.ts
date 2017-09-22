import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Movie } from './movie';


@Injectable()
export class MovieService {

    constructor(private http: Http) {
    }

    search(term: string): Observable<Movie[]> {
        return this.http
                .get(`https://api.themoviedb.org/3/search/movie?api_key=c6ea6031412642a807ae3589783d57dc&query=${term}`)
                .map((response) => response.json().results as Movie[]);
    }
}
