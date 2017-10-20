import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Movie } from '../interfaces';


@Injectable()
export class MovieService {

    constructor(private http: HttpClient) {
    }

    search(term: string): Observable<Movie[]> {
        return this.http
        .get<Movie[]>(`https://api.themoviedb.org/3/search/movie?api_key=c6ea6031412642a807ae3589783d57dc&query=${term}`)
        .map((data) => data['results']);
    }

    getPosts(): any {
        return JSON.parse(localStorage.getItem('FavMovies'));
    }

    orderByService(srtVal, order): any {
        let data = [];
        data = JSON.parse(localStorage.getItem('FavMovies')) || [];
        data = _.orderBy(data, [srtVal], [order]);
        return data;
    }

    filterByService(srtVal): any {
        let data = [];
        data = JSON.parse(localStorage.getItem('FavMovies')) || [];
        if (srtVal !== '') {
            data = _.filter(data, {'original_language': srtVal});
        }
        return data;
    }

    isFavMovie(id: number): string {
        let data = [];
        data = JSON.parse(localStorage.getItem('FavMovies'));
        if (_.find(data, { 'id': id })) {
            return 'fa fa-heart fa-1x';
        }else {
            return 'fa fa-heart-o fa-1x';
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
