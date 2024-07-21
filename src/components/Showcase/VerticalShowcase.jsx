import { Recommendation, fetchAnimebyId} from '@/utils/api';
import { animeDetail } from "@/utils/animeDetail"
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';




const VerticalShowcase = ({api}) => {
    let anime = api.data.slice(0, 5)
    // console.log(anime)


    return (
            <div className="grid grid-rows-5 gap-2 ">
                {anime.map((data) => {

                    return data.entry.map(async (entry) => {
                        const id = entry.mal_id
                        const detailAnime = await fetchAnimebyId(id)
                        console.log(detailAnime)
                        return (
                            <Link href={`/Info/${id}`} className=' w-full pl-10'>    
                                <div className='flex'>
                                    <Image src={entry.images.webp.image_url} alt='...' width={1080} height={1080}  className='w-32 max-h-40  object-cover rounded-md'/>
                                    <h1 key={entry.mal_id} className='font-semibold pl-2' >{entry.title}</h1>
                                    {/* <h1 >{id}</h1> */}
                                </div>
                            </Link>
                        )
                    })
                })}
            </div>
    )
}

export default VerticalShowcase