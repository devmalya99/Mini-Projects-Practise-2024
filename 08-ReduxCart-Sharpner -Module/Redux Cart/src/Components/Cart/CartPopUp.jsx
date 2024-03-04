import React from 'react'
 import {useDispatch , useSelector} from 'react-redux'

 import { Cart_Increment , Cart_Decrement} from '../../Redux/Slices/productSlice'

const CartPopUp = () => {
    const dispatch = useDispatch()
    const cartlist = useSelector((state)=>state.products.productList)

    const handleCartIncrement = (item)=>{
      dispatch(Cart_Increment(item))
    }

    const handleCartDecrement = (item)=>{
      if(item.quantity > 1){
        dispatch(Cart_Decrement(item))
      }
    }

    
  return (
    <div>
      {cartlist.map((item)=>{
            return (
              <div 
              key={item.id}
              className='bg-green-300 w-1/3 border-black border-2'>
                <h2>Your Shopping Cart</h2>
                <div className='font-semibold'>
                    <p>Cart Items</p>
                    <div className='border-white border-2'>
                        <h3>{item.title}</h3>
                        <img src={item.image}/>
                        <h4>${item.price}</h4>
                        <h4>Quantity:{item.quantity}</h4>
                        
                        
                        <button 
                        onClick={()=>handleCartIncrement(item)}
                        className='p-2 bg-green-500'>+</button>
                        
                        
                        <button 
                         onClick={()=>handleCartDecrement(item)}
                        className='p-2 bg-red-500'>-</button>
                    </div>
                </div>

             </div>
            )
        })}
    </div>
  )
}

export default CartPopUp