import { useEffect, useState } from 'react';
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setimages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images, // lo mismo que images: images,
        isLoading: isLoading // lo mismo que images: images,
    }

}