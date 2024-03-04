

import {createSlice} from "@reduxjs/toolkit";


const themeSlice = createSlice({
    name:'theme',
     initialState:{
        darkMode: false,
     },
     reducers:{
        switchTheme : (state)=>{
            state.darkMode = !state.darkMode
        },
     }
})

export const {switchTheme} = themeSlice.actions

export const currentTheme = state => state.theme.darkMode

const themeReducer = themeSlice.reducer
export default themeReducer;