const url = "https://api.themoviedb.org/3";
const apiKey = `${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;

// GET ALL MOVIES AND TVSERIES
export async function getData(page: number, query: string) {
    const res = await fetch(
        `${url}/trending/all/day?api_key=${apiKey}&page=${page}&query=${query}`
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

// GET A SINGLE MOVIE
export async function getMovieByID(id: any) {
    const res = await fetch(
        `${url}/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=credits`
    );
    if (!res.ok) {
        // throw new Error("Failed to fetch data");
    }

    return res.json();
}

//GET MOVIES ONLY
export async function getMoviesOnly(page = 1) {
    const res = await fetch(
        `${url}/discover/movie?api_key=${apiKey}&page=${page}&sort_by=popularity.desc`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export async function searchMovie(page = 1, query: string) {
    // 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=dc52cc88da921145988e910ebbf4d5ca'
    // const url = 'https://api.themoviedb.org/3/search/keyword?query=monarch&page=1';
    const res = await fetch(              
        `${url}/discover/movie?api_key=${apiKey}&page=${page}?query=${query}&sort_by=popularity.desc`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

// GET TVSERIES ONLY
export async function getTvSeries(page = 1) {
    const res = await fetch(
        `${url}/discover/tv?api_key=${apiKey}&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

// GET A SINGLE TV SHOW

export async function getOneTvShow(id: any) {
    const res = await fetch(
        `${url}/tv/${id}?api_key=${apiKey}&sort_by=primary_release_date.desc`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=primary_release_date.desc';

// const url = 'https://api.themoviedb.org/3/search/keyword?query=monarch&page=1';

 //const url = 'https://api.themoviedb.org/3/search/movie?query=monarchy&include_adult=false&language=en-US&page=1';
