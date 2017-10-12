import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MovieService } from './movies.service';
import { Movie } from './movie';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
// import { Hero } from './hero';
// import { HeroService } from './hero.service';

@Component({
    selector: 'app-home',
    templateUrl: './home-fav.component.html',
    styleUrls: [],
    providers: [MovieService]
})

export class HomeFavComponent implements OnInit {
    title = 'My Dashboard';
    movies: Movie[] = [];

    constructor(private apiSerivce: MovieService, public toastr: ToastsManager, vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    addRemoveFav(fav) {
        if (this.apiSerivce.toggleFav(fav)) {
            this.showInfo('Added to favourites');
        }else {
            this.showWarning('Removed from favourites');
        }
    }

    public isFav(id: number): string {
        return this.apiSerivce.isFavMovie(id);
    }

  showInfo(msg: string) {
      this.toastr.info(msg, null, { positionClass: 'toast-bottom-right', animate: 'flyRight' });
  }

  showWarning(msg: string) {
      this.toastr.warning(msg, null, { positionClass: 'toast-bottom-right', animate: 'flyRight' });
  }

    ngOnInit(): void {
        this.movies = this.apiSerivce.getPosts();
    }
}



