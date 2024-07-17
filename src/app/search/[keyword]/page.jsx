import React from 'react'
import SearchedKey from "@/components/Showcase"
import Header from '@/components/Header'



const Page = async ({params}) => {
  const { keyword } = params
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
  const searchedKey = await response.json()

  return (
    <div>
      <Header  title={`Search for ${keyword}`}/>
      <SearchedKey api={searchedKey} />
    </div>
  )
}

export default Page