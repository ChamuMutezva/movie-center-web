import { Key } from "react";
import Image from "next/image";
import { getData } from "@/lib/getMovies";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Search from "@/components/search";

export default async function Home({
    searchParams,
}: Readonly<{
    searchParams: {
        [key: string]: string | string[] | undefined;
        query?: string;
    };
}>) {
    // use searchParams to target current page.
    const query = searchParams?.query ?? "";
    //  const currentPage = Number(searchParams?.page) || 1;
    const page =
        typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
    const search =
        typeof searchParams.search === "string"
            ? searchParams.search
            : undefined;
    const data = await getData(page, query);

    return (
        <main className="flex min-h-screen max-w-[77.5rem] flex-col items-center justify-between p-8">
            <h1 className="sr-only">Movies center</h1>
            <Search placeholder="Search for..." />
            <h2>Recommended for you</h2>
            <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-8 py-4">
                {data?.results.map(
                    (movie: {
                        release_date: string;
                        poster_path: string;
                        id: string;
                        title: string;
                        name: string;
                        media_type: string;
                        vote_average: number;
                    }) => (
                        <li
                            key={movie.id}
                            className="relative recommended-list group"
                        >
                            <div className="flex justify-center items-center">
                                <Image
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    alt=""
                                    width="2000"
                                    height="3000"
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
                                        priority
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
                            <Link
                                className="absolute top-0 left-0 w-full h-full"
                                href={`all/${movie.id}`}
                            >
                                <span className="sr-only">View movie {movie.name}</span>
                            </Link>
                        </li>
                    )
                )}
            </ul>

            <div className="flex justify-center items-center gap-2">
                <Link
                    href={{
                        pathname: "/",
                        query: {
                            ...(search ? { search } : {}),
                            page: page > 1 ? page - 1 : 1,
                        },
                    }}
                >
                    <ArrowLeftIcon className="h-6 w-6" />
                </Link>
                <p> {page}</p>
                <Link
                    href={{
                        pathname: "/",
                        query: {
                            ...(search ? { search } : {}),
                            page: page < 500 ? page + 1 : 500,
                        },
                    }}
                    aria-label="Next page"
                >
                    <ArrowRightIcon className="h-6 w-6" />
                </Link>
            </div>
        </main>
    );
}
