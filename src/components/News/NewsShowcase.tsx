"use client"
import { fetchAnimeNews } from "@/utils/api"
import { useState, useEffect } from "react";

interface NewsData{
    mal_id: number;
    title: string;
    images: {
        webp: {
            image_url: string;
        };
    };
}

interface NewsProps {
    id: number;
}

const NewsShowcase: React.FC<NewsProps> = ({ id }) => {
    const [news, setNews] = useState<NewsData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getNews = async () => {
            try {
                const api = await fetchAnimeNews(id);
                setNews(api.data);
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        getNews();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            {news.map((data: NewsData) => (
                <div key={data.mal_id}>
                    <h1>{data.title}</h1>
                    <img src={data.images.webp.image_url} alt={data.title} />
                </div>
            ))}
        </div>
    );
};

export default NewsShowcase