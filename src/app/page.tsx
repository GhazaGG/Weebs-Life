import TopAninmeShow from "@/components/Showcase"
import RecomendedAnime from "@/components/Showcase"
import Header from "@/components/Header";
import {fetchTopAnime, fetchRecomendedAnime} from "@/utils/api";
import Link from "next/link";


const Home = async () => {

  const [topAnime, recomendedAnime] = await Promise.all([fetchTopAnime(), fetchRecomendedAnime()])

  return (
      <>
        <Header />
        <div className="flex justify-between mt-5 text-utama">
          <h3 className="font-semibold text-md">Most Popular Anime</h3>
          <Link href={'/TopAnime'} className="text-sm hover:underline">View More</Link>
        </div>
        <TopAninmeShow api={topAnime} place="homepage"/>
      </>
  );
}

export default Home;