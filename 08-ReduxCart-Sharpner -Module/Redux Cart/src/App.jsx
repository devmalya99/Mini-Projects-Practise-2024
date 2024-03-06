import { useEffect } from 'react'
import Layout from './Components/Layout/Layout'
import './App.css'
import {useSelector} from 'react-redux'
import ProductCard from './Components/Product/ProductCard'
import CartPopUp from './Components/Cart/CartPopUp'



function App() {
 

 const isVisible = useSelector((state)=>state.showCart.isVisible)
 console.log(isVisible)

 const currTheme = useSelector((state)=>state.theme.currTheme)

 const cartArr=useSelector((state)=>state.products.productList)
 console.log(cartArr)


useEffect(()=>{
    fetch('https://redux-cart-backend-default-rtdb.firebaseio.com/cart_products.json', 
    {method:'PUT', body:JSON.stringify(cartArr)})
},[cartArr])


  return (
    <div className={currTheme ? 'dark' : 'light'}>
    <Layout>
      
      <ProductCard/>

      {isVisible && <CartPopUp/>}
     

    </Layout>
    </div>
  )
}

export default App
