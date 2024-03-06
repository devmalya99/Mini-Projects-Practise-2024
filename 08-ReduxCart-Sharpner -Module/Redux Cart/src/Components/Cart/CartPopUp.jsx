import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Cart_Increment, Cart_Decrement } from '../../Redux/Slices/productSlice'
import { toggleVisibility } from '../../Redux/Slices/cartSlice'
const CartPopUp = () => {
  const dispatch = useDispatch()
  const cartlist = useSelector((state) => state.products.productList)

  const handleCartIncrement = (item) => {
    dispatch(Cart_Increment(item))
  }
    
  const handleCartDecrement = (item) => {
    if(item.quantity > 1){
      dispatch(Cart_Decrement(item))
    }
  }

  const handleCloseCart = ()=>{
    dispatch(toggleVisibility(false))
  }

  return(
    <div 
      className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg flex items-center justify-center z-50' 
      aria-hidden="true">
      <div 
        className='bg-white dark:bg-gray-800 p-5 rounded shadow-lg w-full max-w-md m-auto overflow-y-scroll h-3/4 dark:text-white' 
        role="dialog" 
        aria-modal="true">
          <h1 className='text-center text-2xl font-bold'>Your Shopping Cart</h1>
          <p className='font-semibold text-xl'>Cart Items</p>
        {cartlist.map((item)=>{
          return (
            <div key={item.id} className='bg-green-300 border-2 dark:border-white dark:bg-slate-500'>
              
              <div>
                
                <div className='p-2 border-white border-2'>
                  <h3 className='mt-2 mb-2'>{item.title}</h3>
                  <img className='h-32 w-32' src={item.image} alt={item.title}/>
                  <h4 className='mt-2 mb-2'>${item.price}</h4>
                  <h4 className='mt-2 mb-2'>Quantity:{item.quantity}</h4>
                
                <button 
                  onClick={()=>handleCartIncrement(item)}
                  className='p-2 bg-green-500 rounded text-white mx-1'>+</button>
              
                <button 
                  onClick={()=>handleCartDecrement(item)}
                  className='p-2 bg-red-500 rounded text-white mx-1'>-</button>
                </div>
              </div>

            </div>
          )
        })}
        <button 
        className='p-2 bg-red-500 rounded text-white'
        onClick={handleCloseCart}
        >Close Cart</button>
      </div>
      
    </div>
  )
}

export default CartPopUp