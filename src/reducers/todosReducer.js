import { COMPLETE_TODO, SUBMIT_TODO } from "../types";
// Reducers = funciones, que saben que hacer con las acciones y el payload

const initialState = [
  { id: 1, desc: 'todo 1', completed: false },
  { id: 2, desc: 'todo 2', completed: false }
];

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case COMPLETE_TODO:
      // return state.map( item=> item.id === action.payload? ({...item, completed: true}): item);
      return state.map( item=> item.id === action.payload? ({...item, completed: !item.completed}): item);
    case SUBMIT_TODO:
      // de manera  que todo lo que agregamos sea el primero en la lista
      return [action.payload].concat(state);
    default:
      return state;
  }
}
