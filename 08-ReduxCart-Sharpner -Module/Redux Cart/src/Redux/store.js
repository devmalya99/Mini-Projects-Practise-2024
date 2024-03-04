

import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './Slices/cartSlice'
import productReducer from './Slices/productSlice'


const store = configureStore({
    reducer:{
        showCart: cartSlice,
        products: productReducer

    }
})
export default store