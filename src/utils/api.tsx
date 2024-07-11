import { Module } from "module"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

export const fetchTopAnime = async()=> {
    try {
        const response = await fetch(`${baseUrl}/top/anime`)
        if(!response.ok){
            throw new Error('Faild to fetch data')
        }
        const data = response.json()
        return data
    } catch (error) {
        console.error('Error fetching top anime:', error);
        return [];
    }
}
export const fetchRecomendedAnime = async()=> {
    try {
        const response = await fetch(`${baseUrl}/recommendations/anime`)
        if(!response.ok){
            throw new Error('Faild to fetch data')
        }
        const data = response.json()
        return data
    } catch (error) {
        console.error('Error fetching top anime:', error);
        return [];
    }
}
