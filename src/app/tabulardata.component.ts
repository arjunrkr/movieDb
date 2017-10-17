import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FakeService } from './fake.service';
import { Fake } from './fake';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-home',
    templateUrl: './tabular.component.html',
    styleUrls: [],
    providers: [FakeService]
})

export class TabularDataComponent implements OnInit {
    title = 'My Dashboard';

    fakedata: Fake[];

    constructor(private apiSerivce: FakeService) { }

    ngOnInit() {
        this.apiSerivce.getPosts().then(fakedata => this.fakedata = fakedata);
    }
}



