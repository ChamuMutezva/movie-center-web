import React, { Suspense } from "react";
import { getTvSeries } from "@/lib/getMovies";
import {
    backward,
    backwardTenPages,
    forward,
    forwardTenPages,
} from "../utils/utils";
import Pagination from "@/components/pagination";
import Movie from "@/components/movie";
import Loading from "@/shared/loading";
import Title from "@/components/title";

export default async function Page({
    searchParams,
}: Readonly<{
    searchParams: {
        [key: string]: string | string[] | undefined;
        query?: string;
    };
}>) {
    const query = searchParams?.query ?? "";
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
            <Title title="tv series only" />
            <h2>TV Series for all</h2>
            <Suspense key={query + currentPage} fallback={<Loading />}>
                <Movie data={data} path="/tvSeries/" />
            </Suspense>

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
