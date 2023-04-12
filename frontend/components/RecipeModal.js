import React,{useState} from 'react'
import Image from 'next/image'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAddFav } from '../hooks/useAddFav';
import { useRemoveFav } from '../hooks/removeFav';

export const RecipeModal = ({toggleModal,data}) => {
    
    const [isFav,setIsFav] = useState(false)
    const myLoader=({src})=>{
        return src;
    }
    function stripHtml(html)
    {
        let tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }
    const handleFav = (e) => {
        e.stopPropagation()
        if(isFav){
            removeRefetch()
        }
        else{
            addRefetch()
        }
        setIsFav(!isFav)
    }
    const { data:addData,refetch:addRefetch} = useAddFav(data);
    const { data:removeData,refetch:removeRefetch} = useRemoveFav(data.id);
  return (
   
    <div className='z-50 h-screen w-full bg-black/[0.5] fixed flex items-center justify-center' onClick={toggleModal}>
        <div className='w-1/2 bg-white rounded h-2/3 overflow-y-auto  flex flex-col p-3 items-center fixed'>
            <div className='h-72 w-11/12 absolute rounded-md'>
                <Image
                    loader={myLoader}
                    src={data?.image}
                    alt="recipe"
                    layout="fill"
                    objectFit="cover"
                    className='rounded-t-md'
                />
            </div>
            <div className='w-11/12 mt-80 flex items-center justify-between'>
                <div />
                <p className='font-semibold text-lg text-gray-900'>{data?.title}</p>
                {isFav ? <FavoriteIcon className='text-xl text-red-600 relative right-0 cursor-pointer' onClick={(e)=>handleFav(e)} />
                : <FavoriteBorderIcon className='text-xl text-black relative right-0 cursor-pointer' onClick={(e)=>handleFav(e)} />}
            </div>
            <div className='w-11/12 flex flex-col mt-5'>
                <p className='font-semibold text-gray-900'>Ingredients</p>
                <div className='flex flex-wrap w-11/12'>
                    {
                        data?.extendedIngredients.map(data => {
                            return(
                                <div key={data?.id} className='w-1/5 mr-2 flex items-center justify-center rounded my-2 border border-gray-500 p-1'>
                                    <p className='text-gray-900 text-center'>{data?.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='w-11/12 flex flex-col mt-3'>
                <p className='font-semibold text-gray-900'>Instructions</p>
                <div className='flex flex-wrap w-11/12 mt-3 flex-col'>
                    {
                        data?.instructions.split('.').map((step,index) => {
                            if(step.length > 3){
                                return(
                                    <div className='my-2'>
                                        <p className='text-gray-900'>{(index+1) + '. '+ stripHtml(step)}</p>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
