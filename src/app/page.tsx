import TopAninmeShow from "@/components/Showcase"
import Header from "@/components/Header";
import InputSearch from "@/components/InputSearch/InputSearch";
import {fetchTopAnime,fetchRecomendedAnime, fetchAnimeNews} from "@/utils/api";
import Link from "next/link";
import NewsShowcase from "@/components/News/NewsShowcase"
import VerticalShowcase from "@/components/Showcase/VerticalShowcase"

const Home = async () => {


  const popularAnime = await fetchTopAnime()
  const recomendedAnime = await fetchRecomendedAnime()



  return (
      <>
        <Header />

        <div className=" mt-3 items-center">
          <InputSearch content="Anime"/>
        </div>
        <div className="flex justify-between">
          <div className=" mt-5 text-utama w-2/3 pr-7 pl-3">
            <div className="w-full flex justify-between">
              <h3 className="font-bold text-xl">Most Popular Anime</h3>
              <Link href={'/Anime/PopularAnime'} className="text-sm hover:underline">View More</Link>
            </div>
            <TopAninmeShow api={popularAnime} place="homepage"/>
          </div>
          <div className="w-1/3 mt-5">

            <VerticalShowcase  api={recomendedAnime}/>
          </div>
        </div>
      </>
  );
}

export default Home;