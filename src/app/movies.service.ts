import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as _ from 'lodash';
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
    getPosts(): any {
        return JSON.parse(localStorage.getItem('FavMovies'));
    }

    isFavMovie(id: number): string {
        var data = [];
        data = JSON.parse(localStorage.getItem('FavMovies'));
        var found = _.find(data, { 'id': id });
        if (found) {
            return 'star glyphicon glyphicon-star';
        }else {
            return 'star glyphicon glyphicon-star-empty';
        }
    }
    toggleFav(fav): boolean {
        var data = [];
        data = JSON.parse(localStorage.getItem('FavMovies')) || [];
        console.log('--------------------------V-Current Collection-V------------------------------');
        console.log(data);
        var found = _.find(data, { 'id': fav.id }); // checks for film with id exist on current collection
        if (found) {
            data = _.reject(data, { 'id': fav.id }); // if film exist in fav list, its removed from current collection
            console.log('---------------------------V-Final Collection-V--------------------------------');
            console.log(data);
            localStorage.setItem('FavMovies', JSON.stringify(data));
            return false;
        }else {
            data = _.concat(data, fav); // if not found, concat new film to current collection
            console.log('---------------------------V-Final Collection-V--------------------------------');
            console.log(data);
            localStorage.setItem('FavMovies', JSON.stringify(data));
            return true;
        }
    }
}
