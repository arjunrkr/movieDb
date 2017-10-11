import { Component, OnInit } from '@angular/core';
import { MovieService } from './movies.service';
import { Movie } from './movie';
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

    constructor(private apiSerivce: MovieService) {
    }

    addRemoveFav(fav) {
        this.apiSerivce.toggleFav(fav);
    }

    public isFav(id: number): string {
        return this.apiSerivce.isFavMovie(id);
    }

    ngOnInit(): void {
        this.movies = this.apiSerivce.getPosts();
    }
}



