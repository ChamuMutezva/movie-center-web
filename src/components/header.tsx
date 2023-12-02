import Link from "next/link";
import Image from "next/image";
import React from "react";
import Navigation from "./navigation";

function Header() {
    return (
        <header className="w-full max-w-[77.5rem] flex justify-between items-center p-6 bg-semiDarkBlue md:rounded-lg md:m-6 relative top-0 z-10">
            <Link href={"/"} aria-label="all movies">
                <Image src={"/tmdb.svg"} width={101.84} height={40} alt="" />
            </Link>

            <Navigation />
            <div className="flex gap-2">
                <button aria-label="log out">
                    <Image
                        src={"/assets/image-avatar.png"}
                        width={40}
                        height={40}
                        alt=""
                    />
                </button>
            </div>
        </header>
    );
}

export default Header;
