import { useQuery } from 'react-query'
import axios from 'axios'

const fetchRecipes = (diet,calorie,intolerance)=>{
    return axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=bbc52a86c3ea456faa2faa2c096082cf&diet=${diet}&minCalories=${calorie}&maxCalories=${calorie > 0 ? parseInt(calorie)+200 : ''}&intolerances=${intolerance}`)
}

export const useGetRecipes = (onSuccess,onError,diet,calorie,intolerance) => {
    return useQuery(
        'r - '+diet+calorie+intolerance,
        ()=>fetchRecipes(diet,calorie,intolerance),
        {
            onSuccess,
            onError,
            refetchOnMount:false,
            refetchIntervalInBackground:false,
            refetchOnWindowFocus:false,
            staleTime:Infinity,
            // enabled:false
        }
    )
}