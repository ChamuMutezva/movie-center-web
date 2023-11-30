import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { PageReturnType } from "@/app/types/types";
import Link from "next/link";
import React from "react";

function Pagination({
    backward,
    forward,
    nextTen,
    previousTenPages,
    page,
}: {
    page: number;
    backward: () => PageReturnType;
    forward: () => PageReturnType;
    nextTen: () => PageReturnType;
    previousTenPages: () => PageReturnType;
}) {
    return (
        <div className="flex justify-center items-center gap-2">
            <Link
                href={previousTenPages()}
                className="flex justify-center items-center border border-white rounded-sm p-2"
                aria-label="previous ten pages"
            >
                <ArrowLeftIcon className="h-6 w-6" />
                <ArrowLeftIcon className="h-6 w-6" />
            </Link>
            <Link
                href={backward()}
                className="flex justify-center items-center border border-white rounded-sm p-2"
                aria-label="Previous page"
            >
                <ArrowLeftIcon className="h-6 w-6" />
            </Link>
            <p> {page}</p>
            <Link
                href={forward()}
                aria-label="Next page"
                className="flex justify-center items-center border border-white rounded-sm p-2"
            >
                <ArrowRightIcon className="h-6 w-6" />
            </Link>
            <Link
                href={nextTen()}
                aria-label="Next Ten pages"
                className="flex justify-center items-center border border-white rounded-sm p-2"
            >
                <ArrowRightIcon className="h-6 w-6" />
                <ArrowRightIcon className="h-6 w-6" />
            </Link>
        </div>
    );
}

export default Pagination;
