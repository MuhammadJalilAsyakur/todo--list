import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO } from '../actionTypes';

const initialState = {
    todos: []
    }


const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, text } = action.payload;
      return {
        todos: [
          ...state.todos,
          { text, id, completed: false }
        ]
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      const todos = state.todos.map(obj => obj.id === id ? { ...obj, completed: !obj.completed } : obj);
      return { todos };
    }
    case EDIT_TODO: {
      const { id, text } = action.payload;
      const todos = state.todos.map(obj => obj.id === id ? { ...obj, text } : obj);
      return { todos };
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      const todos = state.todos.filter(obj => obj.id !== id);
      return { todos };
    }
    default: {
      return state;
    }
  }
};

export default todos;