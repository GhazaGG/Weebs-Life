import { fetchAnimeNews } from "@/utils/api"

interface NewsProps{
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
    }
}

const NewsShowcase: React.FC<NewsProps> = async (api) => {
    // let test = api.data
    return (
        <div>
            test
        </div>
    )
}   

export default NewsShowcase