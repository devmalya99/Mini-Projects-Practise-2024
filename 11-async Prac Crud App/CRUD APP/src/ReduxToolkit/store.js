

import { configureStore } from '@reduxjs/toolkit';  
import userDetailReducer from './Slices/UserDetailSlice'
export const store = configureStore({
    reducer: {
        app: userDetailReducer
    },
})