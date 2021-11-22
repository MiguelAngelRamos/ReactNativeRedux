import { COMPLETE_TODO, SUBMIT_TODO } from "../types";

export const completeAction  = id => ({
  type: COMPLETE_TODO,
  payload: id
});