import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { MusicService } from './music.service';
import { Music } from './interfaces';

@Component({
    selector: 'app-music',
    templateUrl: './music.component.html',
    styleUrls: [],
    providers: [ MusicService ],
})

export class MusicComponent implements OnInit {
  title = 'My Dashboard';
  private searchTerms = new Subject<string>();
  private loadingIndicator: boolean = false;
  musics: Observable<Music[]>;
  constructor(
    private apiService: MusicService,
    private router: Router,
    public toastr: ToastsManager, vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
    }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  public isFav(id: number): string {
    return this.apiService.isFavMusic(id);
  }

  addRemoveFav(fav) {
      if (this.apiService.toggleFav(fav)) {
          this.showInfo('Added to favourites');
      }else {
          this.showWarning('Removed from favourites');
      }
  }

  showInfo(msg: string) {
      this.toastr.info(msg, null, { positionClass: 'toast-bottom-right', animate: 'flyRight' });
  }

  showWarning(msg: string) {
      this.toastr.warning(msg, null, { positionClass: 'toast-bottom-right', animate: 'flyRight' });
  }


  ngOnInit(): void {
    this.musics = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .do(_ => this.loadingIndicator = true)
      .switchMap(term =>  term
        ? this.apiService.search(term)
        : Observable.of<Music[]>([]))
      .do(_ => this.loadingIndicator = false)
      .catch(error => {
        console.log(error);
        return Observable.of<Music[]>([]);
      });
  }
}
