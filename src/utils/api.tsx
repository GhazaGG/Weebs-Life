import { Module } from "module"
export interface Anime {
    mal_id: number;
    title: string;
    images: {
        webp: {
            image_url: string;
        };
    };
}

export interface AnimeResponse {
    data: Anime[];
}

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

export const fetchTopAnime = async()=> {
    try {
        const response = await fetch(`${baseUrl}/top/anime`)
        if(!response.ok){
            throw new Error('Faild to fetch data')
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching top anime:', error);
        return [];
    }
}

export const fetchAnimeNews = async (id: number) => {
    try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/news`)
        if(!response.ok){
            throw new Error('Faild to fetch data')
        }
        const data = await response.json()
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
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching top anime:', error);
        return [];
    }
}

export const fetchAnimeBySearch = async () => {
    try {
        const response = await fetch(`${baseUrl}/anime?q=`)
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