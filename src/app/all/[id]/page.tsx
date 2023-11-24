import { getMovieByID } from "@/lib/getMovies";
import Image from "next/image";

export default async function Page({ params }: { params: any }) {
    const { id } = params;
    //  console.log(params)
    //  console.log(id)
    const movie = await getMovieByID(id);
    console.log(movie);

    const numberFormat = (value: number | bigint) =>
        new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(value);

    return (
        <main className="flex min-h-screen max-w-[77.5rem] flex-col items-center justify-between p-8">
            <div className="grid place-content-center gap-4">
                <div className="header">
                    <h1 className="text-3xl">Overview - {movie.title} </h1>
                    <p>
                        Date of release{" "}
                        <time dateTime={movie.release_date}>
                            {movie.release_date}
                        </time>
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center rounded-lg overflow-hidden">
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt=""
                        width={1000}
                        height={2000}
                    />
                </div>

                {/* Genres */}
                <div>
                    <h2 className="text-xl">Genres</h2>
                    <ul className="flex justify-between">
                        {movie.genres.map(
                            (genre: { id: number; name: string }) => (
                                <li key={genre.id}>{genre.name}</li>
                            )
                        )}
                    </ul>
                </div>

                {/* Budget and revenue */}
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-xl">Budget</h2>
                        <p>{numberFormat(movie.budget)}</p>
                    </div>
                    <div>
                        <h2 className="text-xl">Revenue</h2>
                        <p>{numberFormat(movie.revenue)}</p>
                    </div>
                </div>

                {/* Production companies */}
                <div>
                    <h2 className="text-xl mb-4">Production companies</h2>
                    <ul className="grid gap-4">
                        {movie.production_companies.map(
                            (company: {
                                id: number;
                                name: string;
                                origin_country: string;
                                logo_path: string;
                            }) => (
                                <li key={company.id}>
                                    <h3 className="text-lg">
                                        Name: {company.name}
                                    </h3>
                                    <p>
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
                                                        key={country.iso_3166_1}
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
                </div>

                <p>{movie.overview}</p>

                <div>
                    <h2 className="text-xl">Cast</h2>
                    <ul className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8 py-4">
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
                                    <li key={actor.cast_id}>
                                        <p>Name: {actor.name}</p>
                                        <p>Character: {actor.character}</p>
                                        <p>Popularity: {actor.popularity}</p>
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
                </div>
            </div>
        </main>
    );
}
