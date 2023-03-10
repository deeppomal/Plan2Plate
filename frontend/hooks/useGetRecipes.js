import { useQuery } from 'react-query'
import axios from 'axios'

const fetchRecipes = (diet)=>{
    return axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=bbc52a86c3ea456faa2faa2c096082cf&diet=${diet}`)
}

export const useGetRecipes = (onSuccess,onError,diet) => {
    return useQuery(
        'recipes'+diet,
        ()=>fetchRecipes(diet),
        {
            onSuccess,
            onError,
            // enabled:false
        }
    )
}