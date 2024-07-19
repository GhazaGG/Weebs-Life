import TopAninmeShow from "@/components/Showcase"
import Header from "@/components/Header";
import InputSearch from "@/components/InputSearch/InputSearch";
import {fetchTopAnime, fetchRecomendedAnime, fetchAnimeNews} from "@/utils/api";
import Link from "next/link";
import NewsShowcase from "@/components/News/NewsShowcase"
import VerticalShowcase from "@/components/Showcase/VerticalShowcase"

const Home = async () => {


  const popularAnime = await fetchTopAnime()
  const animeNews = await fetchAnimeNews(1)


  return (
      <>
        <Header />

        <div className=" mt-3 items-center">
          <InputSearch content="Anime"/>
        </div>

        <div className="flex justify-between mt-5 text-utama">
          <h3 className="font-semibold text-md">Most Popular Anime</h3>
          <Link href={'/Anime/PopularAnime'} className="text-sm hover:underline">View More</Link>
        </div>
        <TopAninmeShow api={popularAnime} place="homepage"/>

        <div className="flex">
          <div className="w-3/4">
            <NewsShowcase api={animeNews}/>  
          </div>
          <VerticalShowcase />
        </div>
      </>
  );
}

export default Home;