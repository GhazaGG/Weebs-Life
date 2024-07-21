import TopAnime from '@/app/Anime/PopularAnime/page';
import Image from 'next/image'
import Link from 'next/link';

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
        <div className="grid grid-cols-5 gap-2">
          {topAnime.map((data: any) => {
            return (
              <Link href={`/Info/${data.mal_id}`}>              
                <div key={data.mal_id} className='h-100 overflow-hidden pt-2'>
                  <div className='text-center '>
                    <Image src={data.images.webp.image_url} alt='...' width={1080} height={1080}  className='w-44 max-h-60  object-cover rounded-md'/>
                    <h1 className='text-sm '>{data.title}</h1>
                  </div>
                </div>
              </Link>
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