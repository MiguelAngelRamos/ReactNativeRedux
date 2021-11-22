import { COMPLETE_TODO, SUBMIT_TODO } from "../types";
import shortid from "shortid";

export const completeAction  = id => ({
  type: COMPLETE_TODO,
  payload: id
});

export const submitAction  = text => ({
  type: SUBMIT_TODO,
  payload: {
    id: shortid.generate(),
    desc: text,
    completed: false
  }
})

// Math.random().toString(10);