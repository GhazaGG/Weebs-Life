import Header from "@/components/Header"

import Showcase from "@/components/Showcase"
import { fetchTopAnime } from "@/utils/api"

const TopAnime = async () => {
    const [topAnime] = await Promise.all([fetchTopAnime()])
    return (
        <>
            <Header title="Most Popular Anime" />
            <Showcase api={topAnime}/>
        </>
    )
}


export default TopAnime