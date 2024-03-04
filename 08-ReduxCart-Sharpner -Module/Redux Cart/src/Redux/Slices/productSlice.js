import {createSlice} from '@reduxjs/toolkit'
const productSlice = createSlice({
    
    name: 'products',
    initialState: {
        productList:[]
    },
    reducers: {
        setProductList: (state, action) => {
            const existingItem = state.productList.find((item)=> item.id === action.payload.id)
            if(existingItem){
                existingItem.quantity += 1
            }else{
                state.productList.push(action.payload)
            }
        },

        Cart_Increment: (state, action) => {
            const currItem = state.productList.find((item)=> item.id === action.payload.id)
            currItem.quantity++
        },

        Cart_Decrement: (state, action) => {
            const currItem = state.productList.find((item)=> item.id === action.payload.id)
            currItem.quantity--
        }

        
  }
})

export const {setProductList , Cart_Increment, Cart_Decrement} = productSlice.actions
const productReducer = productSlice.reducer

export default productReducer