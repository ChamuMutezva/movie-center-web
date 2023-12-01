import React from "react";
import { getMoviesOnly } from "@/lib/getMovies";
import Pagination from "@/components/pagination";
import {
    backward,
    backwardTenPages,
    forward,
    forwardTenPages,
} from "../utils/utils";
import Movie from "@/components/movie";

export default async function Page({
    searchParams,
}: Readonly<{
    searchParams: {
        [key: string]: string | string[] | undefined;
        query?: string;
    };
}>) {
    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;
    const page =
        typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
    const search =
        typeof searchParams.search === "string"
            ? searchParams.search
            : undefined;
    const data = await getMoviesOnly(page);
    // console.log(data);

    const next = forward(search!, page, "/movies");
    const previous = backward(search!, page, "/movies");
    const nextTenPages = forwardTenPages(search!, page, "/movies");
    const previousTenPages = backwardTenPages(search!, page, "/movies");

    return (
        <main className="flex min-h-screen max-w-[77.5rem] flex-col items-center justify-between p-8">
            <h1 className="sr-only">Movies center</h1>
            <h2>Movies for you</h2>
            <Movie data={data} path="/movies/" />
            <Pagination
                previousTenPages={() => previousTenPages}
                forward={() => next}
                backward={() => previous}
                nextTen={() => nextTenPages}
                page={page}
            />
        </main>
    );
}
