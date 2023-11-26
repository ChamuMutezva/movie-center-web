import { Key } from "react";
export interface PageReturnType {
    pathname: string;
    query: {
        search?: string;
        page: number;
    };
}

export interface MovieType {
    release_date: string;
    poster_path: string;
    id: Key;
    title: string;
    name: string;
    media_type: string;
    vote_average: number;
}

export interface MovieDetailsType {
    title: string;
    name: string;
    release_date: string;
    poster_path: string;
    genres: { id: number; name: string }[];
    budget: number;
    revenue: number;
    spoken_languages: { iso_639_1: Key; name: string }[];
    production_companies: {
        id: number;
        name: string;
        origin_country: string;
        logo_path: string;
    }[];
    production_countries: {
        name: string;
        iso_3166_1: any;
    }[];
    overview: string;
    credits: {
        cast: {
            cast_id: string;
            name: string;
            character: string;
            popularity: number;
            profile_path: string;
        }[];
    };
}
