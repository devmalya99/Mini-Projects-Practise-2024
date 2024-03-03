import { useState } from 'react'
import Layout from './Components/Layout/Layout'
import './App.css'
import {useSelector} from 'react-redux'
import ProductCard from './Components/Product/ProductCard'
import CartPopUp from './Components/Cart/CartPopUp'



function App() {

 const isVisible = useSelector((state)=>state.showCart.isVisible)
 console.log(isVisible)


  return (
    <>
    <Layout>
      
      <ProductCard/>

      {isVisible && <CartPopUp/>}
     

    </Layout>
    </>
  )
}

export default App
