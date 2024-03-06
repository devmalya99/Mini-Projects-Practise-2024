import { useEffect } from 'react'
import Layout from './Components/Layout/Layout'
import './App.css'
import {useSelector,useDispatch} from 'react-redux'
import ProductCard from './Components/Product/ProductCard'
import CartPopUp from './Components/Cart/CartPopUp'
import { setProductList } from './Redux/Slices/productSlice'


function App() {
  const dispatch = useDispatch()
 

 const isVisible = useSelector((state)=>state.showCart.isVisible)
 console.log(isVisible)

 const currTheme = useSelector((state)=>state.theme.currTheme)

 const cartArr=useSelector((state)=>state.products.productList)
 console.log(cartArr)

 useEffect(() => {
  fetch(
    "https://redux-cart-backend-default-rtdb.firebaseio.com/cart_products.json"
  )
    .then((response) => response.json())
    .then((data) => {
      const products = Object.values(data);
      products.forEach((product) => {
        dispatch(
          setProductList({
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            image: product.image,
            quantity: product.quantity,
          })
        );
      });
    })
    .catch((error) => console.error('Error:', error));
}, [dispatch]);


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
