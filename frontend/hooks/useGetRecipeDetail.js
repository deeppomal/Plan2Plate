import { useQuery } from 'react-query'
import axios from 'axios'

const fetchRecipeDetail = (id)=>{
    return axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=bbc52a86c3ea456faa2faa2c096082cf`)
}

export const useGetRecipeDetail = (onSuccess,onError,id) => {
    return useQuery(
        'recipedetail'+id,
        ()=>fetchRecipeDetail(id),
        {
            onSuccess,
            onError,
            refetchOnMount:false,
            refetchIntervalInBackground:false,
            refetchOnWindowFocus:false
            // enabled:false
        }
    )
}