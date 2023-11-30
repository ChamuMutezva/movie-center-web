import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { PageReturnType } from "@/app/types/types";
import Link from "next/link";
import React from "react";

function Pagination({
    backward,
    forward,
    nextTen,
    page,
}: {
    page: number;
    backward: () => PageReturnType;
    forward: () => PageReturnType;
    nextTen: () => PageReturnType;
}) {
    return (
        <div className="flex justify-center items-center gap-2">
            <Link href={backward()}>
                <ArrowLeftIcon className="h-6 w-6" aria-label="Previous page" />
            </Link>
            <p> {page}</p>
            <Link href={forward()} aria-label="Next page">
                <ArrowRightIcon className="h-6 w-6" />
            </Link>
            <Link href={nextTen()} aria-label="Next Ten pages" className="flex justify-center items-center">
                <ArrowRightIcon className="h-6 w-6" />
                <ArrowRightIcon className="h-6 w-6" />
            </Link>
        </div>
    );
}

export default Pagination;
