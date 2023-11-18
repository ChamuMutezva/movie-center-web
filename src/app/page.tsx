import { Key } from "react";
import Image from "next/image";
import Header from "@/components/header";

export default async function Home() {
    /*
    const fetch = require("node-fetch");

    const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US";
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzUyY2M4OGRhOTIxMTQ1OTg4ZTkxMGViYmY0ZDVjYSIsInN1YiI6IjVkYTRhY2UwZTg2MDE3MDAxN2IzMGNiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NvQ_eVrfbOcZmLwcfgN3SJjLvpTTUWZjT_YObd5xCq0",
        },
    };

    fetch(url, options)
        .then((res) => res.json())
        .then((json) => console.log(json))
        .catch((err) => console.error("error:" + err));
      
      */
    const data = await getData();
    console.log(data);
    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col items-center justify-between p-8">
                <h1>Movie center</h1>
                <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8 py-4">
                    {data?.results.map(
                        (movie: {
                            release_date: string;
                            poster_path: string;
                            id: Key;
                            title: string;
                            name: string;
                            media_type: string;
                            vote_average: number
                        }) => (
                            <li
                                key={movie.id}
                                className="relative recommended-list group"
                            >
                                {" "}
                                <h2>{movie.name}</h2>{" "}
                                <div className="flex justify-center items-center">
                                    <Image
                                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                        alt=""
                                        width="470"
                                        height="230"
                                    />
                                </div>
                                <div>
                                <div className="flex gap-4 items-center">
                                    <p className="text-xs font-light opacity-75">
                                        {movie.release_date}
                                    </p>
                                    <Image
                                        width={12}
                                        height={12}
                                        alt=""
                                        src={`${
                                            movie.media_type === "Movie"
                                                ? "/assets/icon-category-movie.svg"
                                                : "/assets/icon-category-tv.svg"
                                        }`}
                                    />
                                    <p className="text-xs font-light opacity-75">
                                        {movie.media_type}
                                    </p>
                                    <p className="font-light text-sm">
                                        {movie.vote_average}
                                    </p>
                                </div>
                                <h2
                                    className={`text-base md:text-lg font-normal text-[1.5rem] z-[1] relative`}
                                >
                                    {movie.title}
                                </h2>
                            </div>
                            </li>
                        )
                    )}
                </ul>
                <p>Total number of movies {data?.results.length}</p>
            </main>
        </>
    );
}

async function getData() {
    const res = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&page=100`
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
