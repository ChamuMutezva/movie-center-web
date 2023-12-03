import React from "react";
import Image from "next/image";

function Footer() {
    return (
        <footer className="py-8 px-4 text-white max-w-sm">
            <p className="text-center font-extralight">
                This is a solution to the
                <a
                    href="https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X"
                    target="_blank"
                    className="text-[#01d277] font-extralight hover:opacity-60 focus:opacity-60"
                >
                    <span className="pl-2">
                        Entertainment web app challenge on Frontend Mentor{" "}
                    </span>
                </a>
                created by
                <a
                    target="_blank"
                    href="https://github.com/ChamuMutezva/movie-center-web"
                    className="text-[#01d277] font-extralight hover:opacity-60 focus:opacity-60"
                >
                    {" "}
                    Chamu Mutezva
                </a>
            </p>
            <div className="flex flex-col justify-center items-center mt-8">
                <Image src={"/tmdb3.svg"} width={423.04} height={35.4} alt="" />
                <p className="text-center font-extralight">
                    This product uses the TMDB API but is not endorsed or
                    certified by TMDB.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
