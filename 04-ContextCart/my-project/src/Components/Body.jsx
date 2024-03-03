import React ,{useState} from "react";

const Body = ({count , addToCart}) => {
    

  console.log(`count is ${count}` );

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between leading-normal">
      <button
        className="mt-4 py-2 px-4 bg-blue-500 text-white text-sm font-semibold rounded focus:outline-none focus:ring-offset-2 focus:ring-blue-600"
        onClick={addToCart}
      >
        Add to Cart {count}
      </button>
    </div>
  );
};

export default Body;
