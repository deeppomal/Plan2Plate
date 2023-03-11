import React,{useState} from 'react'

export const RecipeFilters = () => {
  const [diet,setDiet] = useState('vegan')
  return (
    <div className='w-1/4 flex justify-center'>
      <div className='flex flex-col items-center shadow-lg rounded h-72 mt-11 w-10/12 p-3'>
        <p className='font-bold text-lg'>Filters</p>
        <div className='mt-2 w-full'>
          <p className='font-medium'>Diet Restriction </p>
          <div className="flex mt-3 items-center">
            <input
              type="radio"
              value="vegan"
              checked={diet === "vegan"}
              onChange={()=>setDiet('vegan')}
            />
            <p className='mx-3'>Vegan</p>
          </div>
          <div className="flex mt-3 items-center">
            <input
              type="radio"
              value="keto"
              checked={diet === "keto"}
              onChange={()=>setDiet('keto')}
            />
            <p className='mx-3'>Keto</p>
          </div>
          <div className="flex mt-3 items-center">
            <input
              type="radio"
              value="gf"
              checked={diet === "gf"}
              onChange={()=>setDiet('gf')}
            />
            <p className='mx-3'>Gluten Free</p>
          </div>
        </div>
      </div>
    </div>
  )
}
