import React from "react";
import Image from "next/legacy/image";
import Head from "next/head";
function AboutUs() {
  return (
    //  <div classNameName="">
    //   <div className="flex justify-center min-h-screen">
    //     <div className="h-screen w-screen fixed">
    //       <Image src="/grocery.png" alt="background picture" layout="fill" />
    //     </div>
    //     <div className="flex min-h-screen w-11/12 z-30 mt-32">
    //       <div className="w-2/3 flex p-3 flex-col items-center">
    //         <p className="text-center font-bold text-3xl">
    //           About us
    //         </p>
    //         <div className="mt-5 w-3/4">
    //          hello
    //         </div>

    //       </div>
    //       <div className="w-1/3 p-3 flex justify-center">
    //         <div className="w-11/12">
    //          side
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <Head>
        <title>About Us | Plan2Plate</title>
        <meta
          name="description"
          content="Learn more about Plan2Plate and our mission to make cooking fun and easy."
        />
      </Head>

      <div className="h-screen w-screen fixed">
        <Image src="/grocery.png" alt="background picture" layout="fill" />
      </div>

      <div className="flex min-h-screen  items-center justify-center">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-120 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="img/figs_aboutus.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                Passion
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                We are passionate foodies who love to share our favorite recipes
                with the world.
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="img/herbs_aboutus.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                Fun
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                We believe that cooking should be fun, easy, and accessible to
                everyone, regardless of their culinary skills.
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="img/spaghetti_aboutus.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                Diversed
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                we value diversity and inclusion, and we make sure to cater to
                different dietary requirements and preferences.
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>


      
    </div>

    
  );
}

export default AboutUs;
