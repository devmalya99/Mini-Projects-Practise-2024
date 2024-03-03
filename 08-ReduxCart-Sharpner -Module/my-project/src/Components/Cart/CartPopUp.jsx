

import React from 'react'
 import {useDispatch} from 'react-redux'

const CartPopUp = () => {
    const dispatch = useDispatch()

    
  return (
    <div className='bg-green-300 w-1/3 border-black border-2'>
        <h2>Your Shopping Cart</h2>
        <div className='font-semibold'>
            <p>Cart Items</p>
            <div className='border-white border-2'>
                <h3>Item 1</h3>
                <h4>9.99$</h4>

                <button className='p-2 bg-green-500'>+</button>
                <button className=' p-2 bg-red-500'>+</button>
                 
            </div>
        </div>

    </div>
  )
}

export default CartPopUp