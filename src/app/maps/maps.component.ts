import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {Message} from '../interfaces';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-search',
    templateUrl: './maps.component.html',
    styleUrls: [],
    providers: [],
})

export class MapsComponent implements OnInit {
    options: any;


    ngOnInit() {
        this.options = {
        center: {lat: 14.4426, lng: 79.9865},
        zoom: 12
        };
    }


}
