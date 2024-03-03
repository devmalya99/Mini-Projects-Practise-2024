

import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './Slices/cartSlice'



const store = configureStore({
    reducer:{
        showCart: cartSlice
    }
})
export default store