import Video from "@/components/video";
import Link from "next/link";

export default async function Page() {
    return (
        <main className="flex h-full max-w-[77.5rem] flex-col items-center justify-between p-8">
            <Video />          
            <div className="overlay absolute top-0 left-0 object-cover w-full min-h-screen bg-greyishBlue opacity-25 mix-blend-overlay"></div>
            <div className="flex flex-col gap-8 relative z-10 top-0">
                <h1 className="text-2xl">Movie center</h1>
                <p>
                    Explore all your favorite movies and TV Series in real time
                    and see some upcoming movies{" "}
                </p>
                <Link href={"/all"} className="p-4 bg-greyishBlue inline-block rounded-lg text-center">Explore</Link>
            </div>
        </main>
    );
}
