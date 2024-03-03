import React from "react";
import "./Buttons.css";
const Buttons = () => {

    const handleClick = (e) => {
        console.log(e.target);
        let body=document.querySelector("body");
        body.style.backgroundColor = getRandomColor();
        e.target.style.backgroundColor=getRandomColor();
    }

   function getRandomColor(){
     let letters = "0123456789ABCDEF";
     let color = "#";
     for (let i = 0; i < 6; i++) {
       color += letters[Math.floor(Math.random() * 16)];
     }
     return color;
   }


  return (
    
    <div className="flex flex-col justify-center items-center h-64">
      <div
        className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 
            flex flex-col w-full !p-6 3xl:p-![18px] bg-white undefined"
      >
        <div className="relative flex flex-row justify-between">
          <h4 className="text-xl ml-2 font-bold text-navy-700 ">
            Devs Color Buttons
          </h4>
        </div>

        <div className="h-full w-full mt-5 flex flex-col">
          <button 
          className="glow-on-hover rounded-full bg-blue-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200
           hover:bg-blue-600 active:bg-blue-700"
           onClick={handleClick}
           >
            Click
          </button>
          <button
           onClick={handleClick}
            className="glow-on-hover rounded-xl border-2 border-black-500 px-5 py-3 text-base mb-3 
            font-medium text-red-500 transition duration-200 hover:bg-red-600/5 active:bg-red-700/5 shadow-2xl"
          >
            Here to
          </button>
          <button 
           onClick={handleClick}
          className="glow-on-hover rounded-xl bg-gradient-to-br from-[#503d81] to-[#1ac45b] px-5 py-3 mb-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            Randomize
          </button>
          <button 
           onClick={handleClick}
          className="glow-on-hover rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
            Colors
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
