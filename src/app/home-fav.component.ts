import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MovieService } from './movies/movies.service';
import { MusicService } from './music/music.service';
import { Movie, SelectItem, Music } from './interfaces';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
// import { Hero } from './hero';
// import { HeroService } from './hero.service';

@Component({
    selector: 'app-home',
    templateUrl: './home-fav.component.html',
    styleUrls: [],
    providers: [MovieService, MusicService]
})

export class HomeFavComponent implements OnInit {
    title = 'My Dashboard';
    movies: Movie[] = [];
    musics: Music[] = [];
    langauges: SelectItem[];

    selectedlangauge: any;


    constructor(
        private movieSerivce: MovieService,
        private musicSerivce: MusicService,
        public toastr: ToastsManager,
        vcr: ViewContainerRef
    ) {
        this.toastr.setRootViewContainerRef(vcr);
        this.langauges = [];
        this.langauges.push({label: 'Any', value: {id: 1, name: 'Any', code: ''}});
        this.langauges.push({label: 'English', value: {id: 2, name: 'English', code: 'en'}});
        this.langauges.push({label: 'Hindi', value: {id: 3, name: 'Hindi', code: 'hi'}});
        this.langauges.push({label: 'Tamil', value: {id: 4, name: 'Tamil', code: 'ta'}});
        this.langauges.push({label: 'Malayalam', value: {id: 5, name: 'Malayalam', code: 'ml'}});
    }

    addRemoveFav(fav) {
        if (this.movieSerivce.toggleFav(fav)) {
            this.showInfo('Added to favourites');
        }else {
            this.showWarning('Removed from favourites');
        }
    }
    addRemoveFavMusic(fav) {
        if (this.musicSerivce.toggleFav(fav)) {
            this.showInfo('Added to favourites');
        }else {
            this.showWarning('Removed from favourites');
        }
    }

    isFav(id: number): string {
        return this.movieSerivce.isFavMovie(id);
    }
    isFavMusic(id: number): string {
        return this.musicSerivce.isFavMusic(id);
    }
    orderBy(srtval: string, order: string): void {
        this.movies = this.movieSerivce.orderByService(srtval, order);
    }
    filterBy(srtval: any): void {
        this.movies = this.movieSerivce.filterByService(srtval.code);
    }
    showInfo(msg: string) {
        this.toastr.info(msg, null, { positionClass: 'toast-bottom-right', animate: 'flyRight' });
    }

    showWarning(msg: string) {
        this.toastr.warning(msg, null, { positionClass: 'toast-bottom-right', animate: 'flyRight' });
    }

    ngOnInit(): void {
        this.movies = this.movieSerivce.getPosts();
        this.musics = this.musicSerivce.getPosts();
    }
}



