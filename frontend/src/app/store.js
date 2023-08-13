import { configureStore } from '@reduxjs/toolkit'
import postSliceReducer from '../features/posts/postSlice.js'

export const store  = configureStore({ 
    reducer: {
        posts: postSliceReducer
    }
});

