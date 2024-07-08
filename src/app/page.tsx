import AnimeList from "../app/components/AnimeList"

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
  const anime = await response.json()


  return (
    <div>
      <div className="grid grid-cols-3">
        {anime.data.map((data: any) => {
          return (
            <div key={data.mal_id}>
              <AnimeList title={data.title} images={data.images.webp.image_url} />
            </div>
          )
        })}
        <p>test</p>
      </div>
    </div>
  );
}

export default Home;