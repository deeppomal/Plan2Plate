import React,{useState,useEffect} from 'react'
import { NavbarNew } from '../components/NavbarNew'
import { RecipeFilters } from '../components/RecipeFilters';
import { RecipeModal } from '../components/RecipeModal';
import { RecipesContainer } from '../components/RecipesContainer';
import { useGetRecipeDetail } from '../hooks/useGetRecipeDetail';
import { useGetRecipes } from '../hooks/useGetRecipes';

const Recipes = () => {
    const [diet,setDiet] = useState('vegan')
    const [calorie,setCalorie] = useState('500')
    const [intolerance,setIntolerance] = useState('')
    const [recipeData,setRecipeData] = useState([])

    const [isModalOpen,setIsModalOpen] = useState(false)
    const [recipeID,setRecipeID] = useState('')
    
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }
    const handleRecipeID = (id) => {
        setRecipeID(id)
        // recipeDetailRefetch()
    }
    const onSuccess = () => {
        setRecipeData(data)
    }
    const onError = () => {
        console.log("Perform error message display")
    }   
    const { isLoading,data, error,refetch} = useGetRecipes(onSuccess,onError,diet,calorie,intolerance);
    const { data: recipeDetailData,refetch: recipeDetailRefetch} = useGetRecipeDetail(recipeID);

    const onSaveClick = () => {
        refetch()
    }
  return (
    <div className='bg-gray-100'>
        <NavbarNew />
        <div className='pt-28 min-h-screen flex'>
            <RecipeFilters setDiet={(diet)=>setDiet(diet)} setCalorie={(calorie)=>setCalorie(calorie)} setIntolerance={(intolerance)=>setIntolerance(intolerance)}
            onSaveClick={onSaveClick}/>
            <RecipesContainer recipeList={data?.data?.results} toggleModal={toggleModal} handleRecipeID={handleRecipeID} />
            {isModalOpen && recipeDetailData && <RecipeModal toggleModal={toggleModal} data={recipeDetailData?.data} />}
        </div>
    </div>
  )
}

export default Recipes