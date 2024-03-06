

import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './Slices/cartSlice'
import productReducer from './Slices/productSlice'
import myThemeReducer from './Slices/ThemeSlice'

const store = configureStore({
    reducer:{
        showCart: cartSlice,
        products: productReducer,
        theme: myThemeReducer

    }
})
export default store