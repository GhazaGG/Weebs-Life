import { fetchAnimebyId } from "@/utils/api";

export const animeDetail = async (id) => {
    const anime = await fetchAnimebyId(id);
    return anime;
};
