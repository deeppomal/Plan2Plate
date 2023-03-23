import React,{useState} from 'react'
import { NavbarNew } from '../components/NavbarNew'
import { RecipeFilters } from '../components/RecipeFilters';
import { RecipeModal } from '../components/RecipeModal';
import { RecipesContainer } from '../components/RecipesContainer';
import { useGetRecipeDetail } from '../hooks/useGetRecipeDetail';
import { useGetRecipes } from '../hooks/useGetRecipes';

const Recipes = () => {
    const [diet,setDiet] = useState('vegan')
    const [isModalOpen,setIsModalOpen] = useState(false)
    const [recipeID,setRecipeID] = useState()
    
    const onSuccess = () => {
        console.log("Perform side effect after data fetching");
    }
    const onError = () => {
        console.log("Perform error message display")
    }
    const FetchAgain = async (diet) => {
        await setDiet(diet)
        refetch()
    }
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }
    const handleRecipeID = (id) => {
        setRecipeID(id)
    }
    const { isLoading,data, isError, error,refetch} = useGetRecipes(onSuccess,onError,diet);
    const { data: recipeDetailData,refetch: RecipeDetailRefetch} = useGetRecipeDetail(onSuccess,onError,recipeID);
  return (
    <div className='bg-gray-100'>
        <NavbarNew />
        <div className='pt-28 min-h-screen flex'>
            <RecipeFilters FetchAgain={FetchAgain} />
            <RecipesContainer recipeList={data?.data?.results} toggleModal={toggleModal} handleRecipeID={handleRecipeID} />
            {isModalOpen && recipeDetailData &&<RecipeModal toggleModal={toggleModal} data={recipeDetailData?.data} />}
        </div>
    </div>
  )
}

export default Recipes