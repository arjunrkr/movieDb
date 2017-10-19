import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Fake } from './interfaces';


@Injectable()
export class FakeService {

    constructor(private http: HttpClient) {}

    getPosts() {
        return this.http.get('../assets/search-index-min.json')
                    .toPromise()
                    .then(res => res as Fake[] || []);
    }
}
