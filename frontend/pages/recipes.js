import React,{useState} from 'react'
import { NavbarNew } from '../components/NavbarNew'
import { RecipeFilters } from '../components/RecipeFilters';
import { RecipesContainer } from '../components/RecipesContainer';
import { useGetRecipes } from '../hooks/useGetRecipes';

const Recipes = () => {
    const [diet,setDiet] = useState('vegetarian')
    const onSuccess = () => {
        console.log("Perform side effect after data fetching");
    }
    const onError = () => {
        console.log("Perform error message display")
    }
    const { isLoading,data, isError, error} = useGetRecipes(onSuccess,onError,diet);
  return (
    <div className=''>
        <NavbarNew />
        <div className='pt-28 min-h-screen flex'>
            <RecipeFilters />
            <RecipesContainer recipeList={data?.data?.results} />
        </div>
    </div>
  )
}

export default Recipes