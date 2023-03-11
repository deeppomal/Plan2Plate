import React from 'react'
import { RecipeCard } from './RecipeCard'

export const RecipesContainer = ({recipeList}) => {
  return (
    <div className='w-3/4 flex flex-wrap p-3 items-center '>
        {
            recipeList?.map((data,index) => {
                return(
                    <RecipeCard data = {data} key={data.id} />
                )
            }) 
        }
    </div>
  )
}
