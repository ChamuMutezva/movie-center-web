import { getData, searchMovie } from "@/lib/getMovies";
import Search from "@/components/search";
import Pagination from "@/components/pagination";
import Loading from "../../shared/loading";
import {
    forward,
    backward,
    forwardTenPages,
    backwardTenPages,
} from "../utils/utils";
import React, { Suspense } from "react";
import Movie from "@/components/movie";

export default async function Home({
    searchParams,
}: Readonly<{
    searchParams: {
        [key: string]: string | string[] | undefined;
        query?: string;
        page?: string;
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

    const data = await getData(page, query);

    const queryData = await searchMovie(query);
    const totalPages = queryData.total_pages;
    console.log(totalPages);
    // console.log(queryData);

    // console.log(data);

    const nextPage = forward(search!, page, "/all");
    const previousPage = backward(search!, page, "/all");
    const nextTenPages = forwardTenPages(search!, page, "/all");
    const previousTenPages = backwardTenPages(search!, page, "/all");

    return (
        <main className="flex min-h-screen max-w-[77.5rem] flex-col items-center justify-between p-8">
            <h1 className="sr-only">Movies center</h1>
            <Search placeholder="Search for..." data={queryData} />
            <h2 className="my-4">Recommended for you</h2>
            {/* <Suspense> lets you display a fallback until its children have finished loading. */}
            <Suspense key={query + currentPage} fallback={<Loading />}>
                <Movie
                    data={
                        query === "" || queryData.results.length === 0
                            ? data
                            : queryData
                    }
                    path="/all/"
                />
            </Suspense>

            <Pagination
                previousTenPages={() => previousTenPages}
                forward={() => nextPage}
                backward={() => previousPage}
                nextTen={() => nextTenPages}
                page={page}
            />
        </main>
    );
}
