import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MovieService } from './movies.service';
import { Movie, SelectItem } from './movie';
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
    langauges: SelectItem[];

    selectedlangauge: any;


    constructor(private apiSerivce: MovieService, public toastr: ToastsManager, vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
        this.langauges = [];
        this.langauges.push({label:'Any', value:{id:1, name: 'Any', code: ''}});
        this.langauges.push({label:'English', value:{id:2, name: 'English', code: 'en'}});
        this.langauges.push({label:'Hindi', value:{id:3, name: 'Hindi', code: 'hi'}});
        this.langauges.push({label:'Tamil', value:{id:4, name: 'Tamil', code: 'ta'}});
        this.langauges.push({label:'Malayalam', value:{id:5, name: 'Malayalam', code: 'ml'}});
    }

    addRemoveFav(fav) {
        if (this.apiSerivce.toggleFav(fav)) {
            this.showInfo('Added to favourites');
        }else {
            this.showWarning('Removed from favourites');
        }
    }

    isFav(id: number): string {
        return this.apiSerivce.isFavMovie(id);
    }
    orderBy(srtval: string, order: string): void {
        this.movies = this.apiSerivce.orderByService(srtval, order);
    }
    filterBy(srtval: any): void {
        this.movies = this.apiSerivce.filterByService(srtval.code);
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



