
import { Module } from "module"


const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
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

export interface Recommendation {
    mal_id: number;
    title: string;
    images: {
        jpg: {
            image_url: string;
        };
    };
}

export interface RecommendationResponse {
    data: Recommendation[];
    pagination: {
        last_visible_page: number;
        has_next_page: boolean;
    };
}

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
        const response = await fetch(`${baseUrl}/recommendations/anime?limit=5`)
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

export const fetchAnimebyId  = async ({id}: any) => {
    try {
        const response = await fetch(`${baseUrl}/anime/${id}`)
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