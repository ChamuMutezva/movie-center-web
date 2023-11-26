import MovieDetails from "@/components/movieDetails";
import Video from "@/components/video";
import { getMovieByID } from "@/lib/getMovies";

export default async function Page({ params }: Readonly<{ params: any }>) {
    const { id } = params;
    const movie = await getMovieByID(id);

    console.log(movie);
    if (movie.title === undefined || movie.title === null) {
        return (
            <div className="flex min-h-screen max-w-[77.5rem] flex-col items-center justify-between p-8">
                <p className="text-2xl">Data for the movie is not available</p>
                <Video />
            </div>
        );
    }

    return (
        <main className=" min-h-screen w-full max-w-[77.5rem] flex-col items-center justify-between p-8">
            <MovieDetails movie={movie} />
        </main>
    );
}
