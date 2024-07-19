import React from 'react'
import SearchedKey from "@/components/Showcase"
import Header from '@/components/Header'
import InputSearch from '@/components/InputSearch/InputSearch'



const Page = async ({params}) => {
  const { keyword } = params
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/manga?q=${keyword}`)
  const searchedKey = await response.json()

  return (
    <div>
      <Header  title={`Search for ${keyword}`}/>
      <div className=" mt-3 mb-5 items-center">
          <InputSearch content="Anime"/>
      </div>
      <SearchedKey api={searchedKey} />
    </div>
  )
}

export default Page