import React, { Key } from "react";
import Image from "next/image";
import { getMoviesOnly } from "@/lib/getMovies";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Pagination from "@/components/pagination";
import { backward, forward , forwardTenPages} from "../utils/utils";
import { MovieType } from "../types/types";
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
    const forwardTenPage = forwardTenPages(search!, page , "/all");

    return (
        <main className="flex min-h-screen max-w-[77.5rem] flex-col items-center justify-between p-8">
            <h1 className="sr-only">Movies center</h1>
            <h2>Movies for you</h2>
            <Movie data={data} path="/movies/" />         

            <Pagination
                forward={() => next}
                backward={() => previous}
                nextTen={() => forwardTenPage}
                page={page}
            />
        </main>
    );
}
