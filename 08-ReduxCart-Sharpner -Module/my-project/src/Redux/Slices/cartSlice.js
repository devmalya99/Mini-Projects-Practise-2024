

//this is the slice responsible for cart visibility

import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart_visibility',
  initialState:{
    isVisible: false
  },
  reducers:{
    toggleVisibility:((state)=>{
        state.isVisible = !state.isVisible
    })
  }

})

export const {toggleVisibility} = cartSlice.actions

export default cartSlice.reducer

