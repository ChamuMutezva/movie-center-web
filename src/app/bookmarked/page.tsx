import { getToken } from "@/lib/getMovies";
export default async function Page() {
    const token = await getToken()
    console.log(token)
    console.log("where is token")
    return (
        <div>
            <h1 className="text-4xl">Bookmarks</h1>
            <h2 className="text-center text-lg my-4">Coming soon...</h2>
        </div>
    );
}
