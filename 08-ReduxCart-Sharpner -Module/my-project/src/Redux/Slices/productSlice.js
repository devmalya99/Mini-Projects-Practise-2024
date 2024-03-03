

import {createSlice} from '@reduxjs/toolkit'
const productSlice = createSlice({
    
    name: 'products',
    initialState: {
        productList:[]
    },
    reducers: {
        setProductList: (state, action) => {
            state.productList = action.payload
        }
    }
})