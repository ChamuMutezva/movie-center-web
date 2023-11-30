import React, { Key } from "react";
import Image from "next/image";
import { getTvSeries } from "@/lib/getMovies";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { backward, backwardTenPages, forward, forwardTenPages } from "../utils/utils";
import Pagination from "@/components/pagination";
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
    const data = await getTvSeries(page);

    const next = forward(search!, page, "/tvSeries");
    const previous = backward(search!, page, "/tvSeries");
    const nextTenPages = forwardTenPages(search!, page, "/tvSeries");
    const previousTenPages = backwardTenPages(search!, page, "/tvSeries");
    // console.log(data);
    return (
        <main className="flex min-h-screen max-w-[77.5rem] flex-col items-center justify-between p-8">
            <h1 className="sr-only">Movies center</h1>
            <h2>TV Series</h2>
            <Movie data={data} path="/tvSeries/" />

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
