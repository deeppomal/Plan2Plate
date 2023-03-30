import React from 'react'
import PostCard from './PostCard'


const DietGenerator = () => {

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg" style={{maxWidth: "73rem"}}>
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Plan2Plate creates personalized meal plans based on your food preferences, budget, and schedule.
            </h1>
            <p className="mt-4 text-xl text-gray-500">
             Reach your diet and nutritional goals with our calorie calculator, weekly meal plans, grocery lists and more. Create your meal plan right here in seconds.
            </p>
          </div>
          <div>
          </div>
        </div>
      </div>
      <PostCard />
    </div>
    
  )
}

export default DietGenerator
