import React,{useState} from 'react'

export const RecipeFilters = ({FetchAgain}) => {
  const [diet,setDiet] = useState('vegan')
  const handleOnChange = (diet) => {
    setDiet(diet)
    FetchAgain(diet)
  }
  return (
    <div className='w-1/4 flex justify-center'>
      <div className='flex flex-col items-center border border-gray-200 shadow-md rounded-md h-72 mt-11 w-10/12'>
        <div className='bg-gray-600 w-full rounded-t-md p-3 items-center justify-center flex'>
          <p className='font-bold text-lg text-white '>Filters</p>
        </div>  
        <div className='mt-2 w-full p-3'>
          <p className='font-semibold'>Diet Restriction </p>
          <div className='w-full bg-slate-500 h-[1px]'></div>
          <div className="flex mt-3 items-center">
            <input
              type="radio"
              value="vegan"
              checked={diet === "vegan"}
              onChange={()=>handleOnChange('vegan')}
            />
            <p className='mx-3'>Vegan</p>
          </div>
          <div className="flex mt-3 items-center">
            <input
              type="radio"
              value="keto"
              checked={diet === "ketogenic"}
              onChange={()=>handleOnChange('ketogenic')}
            />
            <p className='mx-3'>Keto</p>
          </div>
          <div className="flex mt-3 items-center">
            <input
              type="radio"
              value="gf"
              checked={diet === "glutenfree"}
              onChange={()=>handleOnChange('glutenfree')}
            />
            <p className='mx-3'>Gluten Free</p>
          </div>
          <div className="flex mt-3 items-center">
            <input
              type="radio"
              value="veg"
              checked={diet === "vegetarian"}
              onChange={()=>handleOnChange('vegetarian')}
            />
            <p className='mx-3'>Vegetarian</p>
          </div>
          <div className="flex mt-3 items-center">
            <input
              type="radio"
              value="ps"
              checked={diet === "pescetarian"}
              onChange={()=>handleOnChange('pescetarian')}
            />
            <p className='mx-3'>Pescetarian</p>
          </div>
        </div>
      </div>
    </div>
  )
}
