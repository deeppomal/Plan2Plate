import React from 'react'
import Image from 'next/image'

export const RecipeCard = ({data,toggleModal,handleRecipeID}) => {
    const myLoader=({src})=>{
        return src;
    }
    const handleOnClick = (id) => {
        toggleModal()
        handleRecipeID(id)
    }
  return (
    <div className='w-1/2 flex my-4 p-3' onClick={()=>handleOnClick(data?.id)}>
        <div className='bg-white w-11/12 rounded-md flex flex-col drop-shadow-lg cursor-pointer items-center'>
            <div className='h-72 w-full relative rounded-md'>
                <Image
                    loader={myLoader}
                    src={data?.image}
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                    className='rounded-t-md'
                />
            </div>
            <p className='my-3 font-bold text-lg text-gray-900'>
                {data?.title}
            </p>
        </div>
    </div>
  );
}
