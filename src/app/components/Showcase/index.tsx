import Image from 'next/image'

interface ShowcaseProps {
  endpoint: string;
}

const Showcase : React.FC<ShowcaseProps>= async ({endpoint}) => {

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${endpoint}?limit=5`)
    if (!response.ok){
      throw new Error("Network response was not ok")
    }
    const anime = await response.json()
    return (
      <div>
        <div className="grid grid-cols-5 gap-2 w-full border-t border-utama">
          {anime.data.map((data: any) => {
            return (
              <div key={data.mal_id} className='w-41 h-100 overflow-hidden pt-2'>
                <div className='text-center '>
                  <Image src={data.images.webp.image_url} alt='...' width={400} height={450} />
                  <h1 className='font-semibold'>{data.title}</h1>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  } catch (error) {
    if(error instanceof Error){
      <p>Error :{error.message}</p>
    }
    return (
      <p>an unknown error occured</p>
    )
  }
}

export default Showcase;