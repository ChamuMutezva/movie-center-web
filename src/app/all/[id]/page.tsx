import { getMovieByID } from "@/lib/getMovies";
import Image from "next/image";
//import { useRouter } from "next/navigation";

export default async function Page({ params }: { params: any }) {
    const { id } = params;
    //  console.log(params)
    //  console.log(id)
    const data = await getMovieByID(id);
    console.log(data);
    return (
        <main className="flex min-h-screen max-w-[77.5rem] flex-col items-center justify-between p-8">
            <h1>{data.title} overview</h1>
            <Image
                src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                alt=""
                width={1000}
                height={2000}
                priority
            />
        </main>
    );
}
