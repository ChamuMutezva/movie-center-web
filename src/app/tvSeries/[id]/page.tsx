import MovieDetails from "@/components/movieDetails";
import { Key } from "react";
import Video from "@/components/video";
import { getOneTvShow } from "@/lib/getMovies";
import Image from "next/image";

export default async function Page({ params }: Readonly<{ params: any }>) {
    const { id } = params;
    const movie = await getOneTvShow(id);

    const numberFormat = (value: number | bigint) =>
        new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(value);

    console.log(movie);
    if (movie.name === undefined || movie.name === null) {
        return (
            <div className="flex min-h-screen max-w-[77.5rem] flex-col items-center justify-between p-8">
                <p className="text-2xl">Data for the movie is not available</p>
                <Video />
            </div>
        );
    }

    return (
        <main className=" min-h-screen w-full max-w-[77.5rem] flex-col items-center justify-between p-8">
            <div className="w-full grid place-content-center sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="header col-span-3">
                    <h1 className="text-3xl w-full">
                        Overview - {movie.title || movie.name}{" "}
                    </h1>
                    <p className="w-full">
                        Date of release{" "}
                        <time dateTime={movie.release_date}>
                            {movie.release_date}
                        </time>
                    </p>
                </div>

                <div className="col-span-3 sm:col-span-1 flex flex-col justify-center items-center rounded-lg overflow-hidden">
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt=""
                        width={1000}
                        height={2000}
                    />
                </div>

                <div className="flex col-span-2  sm:col-span-1 flex-col gap-4 justify-between w-full">
                    {/* Genres */}
                    <div className="">
                        <h2 className="text-2xl">Genres</h2>
                        {movie.genres === undefined || movie.genres === null ? (
                            <p>No genres to display</p>
                        ) : (
                            <ul className="flex flex-wrap justify-start gap-4 py-4">
                                {movie.genres.map(
                                    (genre: { id: number; name: string }) => (
                                        <li key={genre.id}>
                                            <span className="text-base font-light p-1 border border-white rounded-lg">
                                                {genre.name}
                                            </span>
                                        </li>
                                    )
                                )}
                            </ul>
                        )}
                    </div>
                    {/* decorative image */}
                    <div className="flex flex-col gap-4 justify-between">
                        <Image
                            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                            alt={``}
                            width={400}
                            height={600}
                            className="rounded-lg"
                        />
                    </div>
                    {/* Spoken Languages */}
                    <div>
                        <h2 className="text-2xl">Spoken Languages</h2>
                        {movie.spoken_languages === undefined ||
                        movie.spoken_languages === null ? (
                            <p>Data not yet available</p>
                        ) : (
                            <ul className="flex flex-wrap justify-between gap-4 py-4">
                                {movie.spoken_languages.map(
                                    (language: {
                                        iso_639_1: Key;
                                        name: string;
                                    }) => (
                                        <li key={language.iso_639_1}>
                                            <span className="text-base font-light p-1 border border-white rounded-lg">
                                                {language.name}
                                            </span>
                                        </li>
                                    )
                                )}
                            </ul>
                        )}
                    </div>
                </div>

                {/* Production companies */}
                <div className="col-span-2 lg:col-span-1">
                    <h2 className="text-2xl mb-4">Production companies</h2>
                    {movie.production_companies === undefined ||
                    movie.production_companies === null ? (
                        <p>Production company data not available</p>
                    ) : (
                        <ul className="grid md:grid-cols-2 gap-4">
                            {movie.production_companies.map(
                                (company: {
                                    id: number;
                                    name: string;
                                    origin_country: string;
                                    logo_path: string;
                                }) => (
                                    <li
                                        key={company.id}
                                        className="cols-span-1"
                                    >
                                        <h3 className="text-xl">
                                            Name: {company.name}
                                        </h3>
                                        <p className="text-base font-light">
                                            Production country{" "}
                                            {movie.production_countries
                                                .filter(
                                                    (country: {
                                                        iso_3166_1: any;
                                                    }) =>
                                                        company.origin_country ===
                                                        country.iso_3166_1
                                                )
                                                .map(
                                                    (country: {
                                                        name: string;
                                                        iso_3166_1: any;
                                                    }) => (
                                                        <span
                                                            key={
                                                                country.iso_3166_1
                                                            }
                                                        >
                                                            {country.name}
                                                        </span>
                                                    )
                                                )}
                                        </p>
                                    </li>
                                )
                            )}
                        </ul>
                    )}
                </div>

                <div className="col-span-3">
                    <h2 className="text-2xl">Overview</h2>
                    <p className="text-base font-light">{movie.overview}</p>
                </div>

                <div className="col-span-3">
                    <h2 className="text-2xl">Seasons</h2>
                    {movie?.seasons === undefined || movie?.seasons === null ? (
                        <p>Seasons data is not available </p>
                    ) : (
                        <ul className="grid place-items-center auto-cols-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 py-4">
                            {movie.seasons
                                .slice(0, 9)
                                .map(
                                    (season: {
                                        air_date: string;
                                        episode_count: number;
                                        name: string;
                                        overview: number;
                                        poster_path: string;
                                        id: string;
                                    }) => (
                                        <li
                                            key={season.id}
                                            className="flex flex-col bg-semiDarkBlue gap-4 p-4 h-full w-full justify-between rounded-lg shadow-2xl"
                                        >
                                            <div className="h-full">
                                                <h3 className="text-xl font-light">
                                                    Name: {season.name}
                                                </h3>
                                                <h4 className="text-lg font-light">
                                                    Episode:{" "}
                                                    {season.episode_count}
                                                </h4>
                                                <p className="text-base font-light">
                                                    {season.overview}
                                                </p>
                                                <p className="text-base font-light">
                                                    Date first aired:{" "}
                                                    <time
                                                        dateTime={
                                                            season.air_date
                                                        }
                                                    >
                                                        {season.air_date}
                                                    </time>
                                                </p>
                                            </div>
                                        </li>
                                    )
                                )}
                        </ul>
                    )}
                </div>
            </div>
        </main>
    );
}
