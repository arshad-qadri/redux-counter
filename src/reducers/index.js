import { createStore } from "redux";

const initState = {
  counter: 0,
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
