import { useQuery } from 'react-query'
import axios from 'axios'

const postFav = (data)=>{
    const options = {
        method: 'POST',
        url: 'http://localhost:3000/favourite',
        data: {
            userId: '111',
            recipeId: data.id,
            image: data.image,
            title: data.title,
            extendedIngredients: data.extendedIngredients,
            instructions: data.instructions,
        },
    };
    return axios.request(options)
}

export const useAddFav = (data) => {
    return useQuery(
        'addfav'+data.recipeId,
        ()=>postFav(data),
        {
            refetchOnMount:false,
            refetchIntervalInBackground:false,
            refetchOnWindowFocus:false,
            staleTime:Infinity,
            enabled:false
        }
    )
}