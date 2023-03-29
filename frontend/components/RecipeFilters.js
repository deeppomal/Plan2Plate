import React,{useState} from 'react'

export const RecipeFilters = ({onSaveClick,setDiet,setCalorie,setIntolerance}) => {

  const [diet,setDietH] = useState('vegan')
  const [calorie,setCalorieH] = useState('500')
  const [intolerance,setIntoleranceH] = useState('')

  const handleDiet = (diet) => {
    setDiet(diet)
    setDietH(diet)
  }
  const handleCalorie = (calorie) => {
    setCalorie(calorie)
    setCalorieH(calorie)
  }
  const handleIntolerance = (intolerance) => {
    setIntolerance(intolerance)
    setIntoleranceH(intolerance)
  }
  return (
    <div className='w-1/4 flex justify-center'>
      <div className='flex flex-col items-center border h-1/2 bg-white border-gray-200 shadow-md rounded-md mt-11 w-10/12'>
        <div className='bg-gray-600 w-full rounded-t-md p-3 items-center justify-center flex'>
          <p className='font-bold text-lg text-white '>Filters</p>
        </div>  
        <div className='w-full p-3 '>
          <p className='font-semibold text-gray-900'>Diet Restriction </p>
          <div className='w-full bg-slate-500 h-[1px]'></div>
          <div className="flex mt-2 items-center">
            <input
              type="radio"
              value=""
              checked={diet === ""}
              onChange={()=>handleDiet('')}
              className='bg-white'
            />
            <p className='mx-3 text-gray-900'>All</p>
          </div>
          <div className="flex mt-3 items-center">
            <input
              type="radio"
              value="vegan"
              checked={diet === "vegan"}
              onChange={()=>handleDiet('vegan')}
              className='bg-white'
            />
            <p className='mx-3 text-gray-900'>Vegan</p>
          </div>
          <div className="flex mt-3 items-center">
            <input
              type="radio"
              value="keto"
              checked={diet === "ketogenic"}
              onChange={()=>handleDiet('ketogenic')}
            />
            <p className='mx-3 text-gray-900'>Keto</p>
          </div>
          <div className="flex mt-3 items-center">
            <input
              type="radio"
              value="gf"
              checked={diet === "glutenfree"}
              onChange={()=>handleDiet('glutenfree')}
            />
            <p className='mx-3 text-gray-900'>Gluten Free</p>
          </div>
          <div className="flex mt-3 items-center">
            <input
              type="radio"
              value="veg"
              checked={diet === "vegetarian"}
              onChange={()=>handleDiet('vegetarian')}
            />
            <p className='mx-3 text-gray-900'>Vegetarian</p>
          </div>
          <div className="flex mt-3 items-center">
            <input
              type="radio"
              value="ps"
              checked={diet === "pescetarian"}
              onChange={()=>handleDiet('pescetarian')}
            />
            <p className='mx-3 text-gray-900'>Pescetarian</p>
          </div>
        </div>
        <div className='w-full px-3 pb-3'>
          <p className='font-semibold text-gray-900'>Calorie Counter</p>
          <div className='w-full bg-slate-500 h-[1px]'></div>
          <div className="flex mt-3 items-center">
            <input
              type="radio"
              value="300"
              checked={calorie === "300"}
              onChange={()=>handleCalorie('300')}
            />
            <p className='mx-3 text-gray-900'>300-500</p>
          </div>
          <div className="flex mt-3 items-center">
            <input
              type="radio"
              value="500"
              checked={calorie === "500"}
              onChange={()=>handleCalorie('500')}
            />
            <p className='mx-3 text-gray-900'>500-700</p>
          </div>
          <div className="flex mt-3 items-center">
            <input
              type="radio"
              value="700"
              checked={calorie === "700"}
              onChange={()=>handleCalorie('700')}
            />
            <p className='mx-3 text-gray-900'>700-1000</p>
          </div>
        </div>
        <div className='w-full px-3 pb-3'>
          <p className='font-semibold text-gray-900'>Intolerances</p>
          <div className='w-full bg-slate-500 h-[1px]'></div>
          <div className="flex mt-3 items-center">
            <input
              type="radio"
              value="Dairy"
              checked={intolerance === "Dairy"}
              onChange={()=>handleIntolerance('Dairy')}
            />
            <p className='mx-3 text-gray-900'>Dairy</p>
          </div>
          <div className="flex mt-3 items-center">
            <input
              type="radio"
              value="Peanut"
              checked={intolerance === "Peanut"}
              onChange={()=>handleIntolerance('Peanut')}
            />
            <p className='mx-3 text-gray-900'>Peanut</p>
          </div>
          <div className="flex mt-3 items-center">
            <input
              type="radio"
              value="Shellfish"
              checked={intolerance === "Shellfish"}
              onChange={()=>handleIntolerance('Shellfish')}
            />
            <p className='mx-3 text-gray-900'>Shellfish</p>
          </div>
        </div>
        <div className='bg-gray-800 w-10/12 p-3 rounded flex items-center justify-center mt-10 cursor-pointer shadow-lg'
        onClick={onSaveClick}>
          <p className='font-semibold text-lg'>Save</p>
        </div>
      </div>
    </div>
  )
}
