import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    //ya h ek object h is k ander key function dalskty h
    // is fuction ko alag file ma lakhskty h
    reducers: {

        addTodo: (state, action) => {
            // state k ander update value in the store
            // action.payload or be cheeay malti h
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            //yaha pa context api ma spreet karna huth h
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },

        editTodo: (state, action) => {
            const { id, newText } = action.payload;
            const todoToEdit = state.todos.find((todo) => todo.id === id);
            if (todoToEdit) {
                todoToEdit.text = newText;
            }
        }
    }
})

export const {addTodo, removeTodo, editTodo} = todoSlice.actions

export default todoSlice.reducer













