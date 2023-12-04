import Link from "next/link";
import Image from "next/image";
import React from "react";
import Navigation from "./navigation";

function Header() {
    return (
        <header className="w-full max-w-[77.5rem] flex justify-between items-center p-6 bg-semiDarkBlue md:rounded-lg md:m-6 relative top-0 z-10">
            <Link href={"/"} aria-label="all movies">
                <Image width={33} height={27} src={"/assets/logo.svg"} alt="" />
            </Link>
            <Image
                src={"/tmdb2.svg"}
                width={95.27}
                height={40.76}
                alt="This product uses the TMDB API but is not endorsed or
                    certified by TMDB."
            />
            <Navigation />
            <div className="flex gap-2">
                <button aria-label="log out">
                    <Image
                        src={"/assets/ckm-logo2.png"}
                        width={50}
                        height={50}
                        alt=""
                    />
                </button>
            </div>
        </header>
    );
}

export default Header;
