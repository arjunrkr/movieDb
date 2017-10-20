export class Movie {
    id: number;
    title: string;
    vote_count: string;
    vote_average: string;
    popularity: string;
    original_language: string;
    original_title: string;
    adult: string;
    overview: string;
    release_date: string;
    poster_path: string;
}
export interface SelectItem {
    label: string;
    value: any;
}
export class Fake {
    p: string;
    l: string;
    g: string;
    t: string;
    m: string;
    d: string;
}

export class Music {
    trackId: number;
    trackName: string;
    artistName: string;
    trackViewUrl: string;
    artworkUrl60: string;
    artistId: string;
    primaryGenreName: string;
    releaseDate: string;
    trackTimeMillis: number;
}
export interface Message {
    severity?: string;
    summary?: string;
    detail?: string;
    id?: any;
}
