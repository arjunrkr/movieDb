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

    orderByService(srtVal, order): any {
        let data = [];
        data = JSON.parse(localStorage.getItem('FavMovies')) || [];
        data = _.orderBy(data, [srtVal], [order]);
        // localStorage.setItem('FavMovies', JSON.stringify(data));
        return data;
    }

    isFavMovie(id: number): string {
        let data = [];
        data = JSON.parse(localStorage.getItem('FavMovies'));
        if (_.find(data, { 'id': id })) {
            return 'star glyphicon glyphicon-star';
        }else {
            return 'star glyphicon glyphicon-star-empty';
        }
    }

    toggleFav(fav): boolean {
        let data = [];
        data = JSON.parse(localStorage.getItem('FavMovies')) || [];
        if (_.find(data, { 'id': fav.id })) {
            data = _.reject(data, { 'id': fav.id }); // if film exist in fav list, its removed from current collection
            localStorage.setItem('FavMovies', JSON.stringify(data));
            return false;
        }else {
            data = _.concat(data, fav); // if not found, concat new film to current collection
            localStorage.setItem('FavMovies', JSON.stringify(data));
            return true;
        }
        // console.log('--------------------------V-Current Collection-V------------------------------');
        // console.log(data);
    }

}
