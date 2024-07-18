import TopAnime from '@/app/Anime/PopularAnime/page';
import Image from 'next/image'

interface ShowcaseProps {
  api: {
    data: Array<{
      mal_id: number;
      title: string;
      images: {
        webp: {
          image_url: string;
        };
      };
    }>;
  },
  place?: string
}

const Showcase : React.FC<ShowcaseProps>= ({api, place= 'default'}) => {
  let topAnime =api.data;

  if (place === 'homepage') {
    topAnime = api.data.slice(0, 5);
  }

  try {
    return (
      <div>
        <div className="grid grid-cols-5 gap-2 w-full border-t border-utama">
          {topAnime.map((data: any) => {
            return (
              <div key={data.mal_id} className='w-41 h-100 overflow-hidden pt-2'>
                <div className='text-center '>
                  <Image src={data.images.webp.image_url} alt='...' width={300} height={400}  className='w-full max-h-96 object-cover'/>
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