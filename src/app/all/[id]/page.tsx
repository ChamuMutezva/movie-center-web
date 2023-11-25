import Video from "@/components/video";
import { getMovieByID } from "@/lib/getMovies";
import Image from "next/image";
import { Key } from "react";

export default async function Page({ params }: Readonly<{ params: any }>) {
    const { id } = params;

    const movie = await getMovieByID(id);
    console.log(movie);

    const numberFormat = (value: number | bigint) =>
        new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(value);

    if (movie.title === undefined || movie.title === null) {
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
                        Overview - {movie.title}{" "}
                    </h1>
                    <p className="w-full">
                        Date of release{" "}
                        <time dateTime={movie.release_date}>
                            {movie.release_date}
                        </time>
                    </p>
                </div>

                <div className="col-span-2 sm:col-span-1 flex flex-col justify-center items-center rounded-lg overflow-hidden">
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
                        <h2 className="text-xl">Genres</h2>
                        {movie.genres === undefined || movie.genres === null ? (
                            <p>No genres to display</p>
                        ) : (
                            <ul className="flex justify-between gap-4 py-4">
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
                    {/* Budget and revenue */}
                    <div className="flex flex-col gap-4 justify-between">
                        <div>
                            <h2 className="text-xl">Budget</h2>
                            <p className="text-base font-light">
                                {numberFormat(movie.budget)}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl">Revenue</h2>
                            <p className="text-base font-light">
                                {numberFormat(movie.revenue)}
                            </p>
                        </div>
                    </div>
                    {/* Spoken Languages */}
                    <div>
                        <h2 className="text-xl">Spoken Languages</h2>
                        {movie.spoken_languages === undefined ||
                        movie.spoken_languages === null ? (
                            <p>Data not yet available</p>
                        ) : (
                            <ul className="flex justify-between gap-4 py-4">
                                {movie.spoken_languages.map(
                                    (language: { id: Key; name: string }) => (
                                        <li key={language.id}>
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
                    <h2 className="text-xl mb-4">Production companies</h2>
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
                                        <h3 className="text-lg">
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
                    <h2>Overview</h2>
                    <p className="text-base font-light">{movie.overview}</p>
                </div>

                <div className="col-span-3">
                    <h2 className="text-xl">Cast</h2>
                    {movie?.credits?.cast === undefined ||
                    movie?.credits?.cast === null ? (
                        <p>Cast data is not available </p>
                    ) : (
                        <ul className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-8 py-4">
                            {movie.credits.cast
                                .slice(0, 8)
                                .map(
                                    (actor: {
                                        cast_id: string;
                                        name: string;
                                        character: string;
                                        popularity: number;
                                        profile_path: string;
                                    }) => (
                                        <li
                                            key={actor.cast_id}
                                            className="flex flex-col gap-4"
                                        >
                                            <div>
                                                <p className="text-base font-light">
                                                    Name: {actor.name}
                                                </p>
                                                <p className="text-base font-light">
                                                    Character: {actor.character}
                                                </p>
                                                <p className="text-base font-light">
                                                    Popularity:{" "}
                                                    {actor.popularity}
                                                </p>
                                            </div>
                                            <Image
                                                src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                                                alt=""
                                                width={400}
                                                height={600}
                                                className="rounded-lg"
                                            />
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
