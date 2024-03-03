import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = ({count}) => {
    
  return (
    <header className="bg-blue-500 p-4 flex justify-between items-center">
    <h1 className="text-white text-xl">CONTEXT CART</h1>
    <button 
      className="flex items-center text-white" 
    >
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      <span className={"ml-2 " + (count > 0 ? "inline" : "hidden")}>
            {count}
      </span>
    </button>
</header>
  )
}

export default Header