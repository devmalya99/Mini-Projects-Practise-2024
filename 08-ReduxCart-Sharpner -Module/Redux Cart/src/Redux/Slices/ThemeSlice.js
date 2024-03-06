

//implement dark theme using tailwind class feature so create a redux slice accordingly

import {createSlice} from '@reduxjs/toolkit'

const myThemeSlice = createSlice({
    name: 'theme',
    initialState: {
        currTheme: true
    },
    reducers: {
        toggleTheme: (state)=>{
            state.currTheme = !state.currTheme
        }
    }
})

export const {toggleTheme} = myThemeSlice.actions
const myThemeReducer = myThemeSlice.reducer
export default myThemeReducer