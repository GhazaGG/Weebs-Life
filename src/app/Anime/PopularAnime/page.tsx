import Header from "@/components/Header"

import TopAninmeShow from "@/components/Showcase"
import { fetchTopAnime } from "@/utils/api"

const TopAnime = async () => {
    const popularAnime = await fetchTopAnime()
    return (
        <>
            <Header title="Most Popular Anime" />
            <TopAninmeShow api={popularAnime}/>
        </>
    )
}


export default TopAnime