import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    todos: [],
    errorMsg: '',
    isLoading: false,
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodos: (state, { payload }) => {
            state.todos = payload
        },
        setIsLoading: (state, { payload }) => {
            state.isLoading = payload
        },
    },
});

export const { setIsLoading, setTodos } = todoSlice.actions;

export default todoSlice.reducer;