import Showcase from "./components/Showcase"
import AnimeList from "./components/Showcase"
import Image from 'next/image'

const TopAnime = () => {
  return(
    <Showcase endpoint="top/anime"/>
  )
}


const Home = async () => {

  return (
    <div className="font-Montserrat w-full flex justify-center">
      <div className="w-3/4">
        <div className=" text-white font-bold  h-56  bg-utama text-5xl flex flex-col items-center justify-center">
          <h1>Welcome To Weebs Life!</h1>
          <p className="text-sm font-light pt-2">Immerse yourself in the ultimate anime experience with Weebs Life.</p>
        </div>
        <div className="flex justify-between mt-5 text-utama">
          <h3 className="font-semibold text-md">Top Airing Anime</h3>
          <p className="text-sm">View More</p>
        </div>
        <TopAnime />
      </div>
    </div>
  );
}

export default Home;