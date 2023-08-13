import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addPostAsync = (post) => async (dispatch) => {
    try {
        const name = post.name;
        const description = post.description;
        const response = await axios.post('http://localhost:4000/posts', { name, description});
        return response.data;
    } catch(error) {
        console.log(error);
    } 
}

export const deletePostAsync = (id) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:4000/posts/${id}`);
        dispatch(deletePost(id));
    } catch(error) {
        console.log(error);
    } 
}

const initialState = [];
export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload);
        },
        deletePost: (state, action) => {
            const deleteId = action.payload;
            return state.filter(post => post.id !== deleteId)
        }
    }
});


export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;