import React from "react";
import Image from "next/image";
import { MovieType } from "@/app/types/types";
import Link from "next/link";

function Movie({
    data,
    path,
}: {
    data: { results: MovieType[] };
    path: string;
}) {
    return (
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8 py-4">
            {data?.results.map((movie: MovieType) => (
                <li
                    key={movie.id}
                    className="relative flex flex-col justify-between recommended-list group border-[1px] border-greyishBlue rounded-lg p-2"
                >
                    <div className="flex justify-center items-center">
                        <Image
                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                            alt=""
                            width="470"
                            height="230"
                        />
                    </div>
                    <div className="absolute bg-darkBlue left-2 right-2 opacity-80 bottom-1">
                        <div className="flex gap-4 items-center">
                            <p className="text-xs font-light opacity-75">
                                <span className="sr-only">Date of release</span>{" "}
                                {movie.release_date || movie.first_air_date}
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
                                <span className="sr-only">category</span>{" "}
                                {movie.media_type}
                            </p>
                            <p className="font-light text-sm">
                                <span className="sr-only">Vote average</span>{" "}
                                {movie.vote_average}
                            </p>
                        </div>
                        <h2
                            className={`text-base md:text-lg font-normal text-[1.5rem] z-[1] relative`}
                        >
                            <span className="sr-only">Movie title</span>{" "}
                            {movie.title || movie.name}
                        </h2>
                    </div>
                    <Link
                        className="absolute top-0 left-0 w-full h-full"
                        href={`${path}${movie.id}`}
                    >
                        <span className="sr-only">View movie {movie.name}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default Movie;
