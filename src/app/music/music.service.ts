import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Music } from '../interfaces';


@Injectable()
export class MusicService {
    private apiRoot = 'https://itunes.apple.com/search';
    constructor(private http: HttpClient) {
    }

    search(term: string): Observable<Music[]> {
        return this.http
        .get<Music[]>(`${this.apiRoot}?term=${term}&media=music&limit=20`)
        .map((data) => data['results']);
    }

    getPosts(): any {
        return JSON.parse(localStorage.getItem('FavMusic'));
    }

    // orderByService(srtVal, order): any {
    //     let data = [];
    //     data = JSON.parse(localStorage.getItem('FavMusic')) || [];
    //     data = _.orderBy(data, [srtVal], [order]);
    //     return data;
    // }

    // filterByService(srtVal): any {
    //     let data = [];
    //     data = JSON.parse(localStorage.getItem('FavMusic')) || [];
    //     if (srtVal !== '') {
    //         data = _.filter(data, {'original_language': srtVal});
    //     }
    //     return data;
    // }

    isFavMusic(id: number): string {
        let data = [];
        data = JSON.parse(localStorage.getItem('FavMusic'));
        if (_.find(data, { 'trackId': id })) {
            return 'star glyphicon glyphicon-star';
        }else {
            return 'star glyphicon glyphicon-star-empty';
        }
    }

    toggleFav(fav): boolean {
        let data = [];
        data = JSON.parse(localStorage.getItem('FavMusic')) || [];
        if (_.find(data, { 'trackId': fav.trackId })) {
            data = _.reject(data, { 'trackId': fav.trackId }); // if film exist in fav list, its removed from current collection
            localStorage.setItem('FavMusic', JSON.stringify(data));
            return false;
        }else {
            data = _.concat(data, fav); // if not found, concat new film to current collection
            localStorage.setItem('FavMusic', JSON.stringify(data));
            return true;
        }
        // console.log('--------------------------V-Current Collection-V------------------------------');
        // console.log(data);
    }

}
