import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";
const FavRecipe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Image src="/grocery.png" alt="background picture" layout="fill" />
      </div>
        <div class="h-screen w-full grid place-items-center relative ">
           
      
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <div className="w-1/2 flex my-4 p-3">
          <div className="bg-white w-11/12 rounded-md flex flex-col drop-shadow-lg cursor-pointer items-center">
            <div className="h-72 w-full relative rounded-md">
              <img
                src="https://t3.ftcdn.net/jpg/03/07/15/28/360_F_307152868_ncMILWfZIhGoAEK8QsFDsScGiRaQMsL0.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="my-3 font-bold text-lg text-gray-900">demo</p>
          </div>
        </div>

        <button onClick={() => setIsOpen(false)}>Close Modal</button>
      </Modal>
    </div></div>
  );
};
export default FavRecipe;
