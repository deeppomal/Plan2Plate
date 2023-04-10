import { useQuery } from 'react-query'
import axios from 'axios'

const delFav = (recipeId)=>{
    const options = {
        method: 'DELETE',
        url: 'http://localhost:3000/del-fav',
        data: {
            recipeId: recipeId,
        },
    };
    return axios.request(options)
}

export const useRemoveFav = (recipeId) => {
    return useQuery(
        'removefav'+recipeId,
        ()=>delFav(recipeId),
        {
            refetchOnMount:false,
            refetchIntervalInBackground:false,
            refetchOnWindowFocus:false,
            staleTime:Infinity,
            enabled:false
        }
    )
}