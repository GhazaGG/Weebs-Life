import { fetchAnimebyId, getAnimeResponse } from "@/utils/api"


const AnimeDetail = async ({params}) => {
    const anime = await fetchAnimebyId(params)
    console.log(anime)
    return (
        <div>
            <h1>{anime.data.title}</h1>
        </div>
    )
}

export default AnimeDetail