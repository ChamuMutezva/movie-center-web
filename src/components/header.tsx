import Link from "next/link";
import Image from "next/image";
import React from "react";
import Navigation from "./navigation";

function Header() {
    return (
        <header className="w-full max-w-[77.5rem] flex justify-between items-center p-6 bg-semiDarkBlue md:rounded-lg md:m-6 top-0 z-10">
            <Link href={"/"} aria-label="all movies">
                <Image src={"/assets/logo.svg"} width={33} height={27} alt="" />
            </Link>

            <Navigation />
            <div className="flex gap-2">
                <button aria-label="log out">
                    <Image
                        src={"/assets/image-avatar.png"}
                        width={24}
                        height={24}
                        alt=""
                    />
                </button>
            </div>
        </header>
    );
}

export default Header;
