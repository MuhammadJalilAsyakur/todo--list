import {ADD_TODO, TOGGLE_TODO, SET_FILTER, EDIT_TODO, DELETE_TODO} from './actionTypes';

let nextTodoId = 0;

export const addTodo = text => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        text
    }
})

export const toggleTodo = id => ({type: TOGGLE_TODO, payload: {
        id
    }})

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: {
        filter: filter
    }
})

export const editTodo = (id, text) => ({
    type: EDIT_TODO,
    payload: {
        id,
        text
    }
});

export const deleteTodo = id => ({type: DELETE_TODO, payload: {
        id
    }});
