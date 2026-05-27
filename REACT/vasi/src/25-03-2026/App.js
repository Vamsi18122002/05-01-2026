import { createStore } from "redux";

let initial = {
  sum: 1000,
};

function reducer(state = initial, action) {
  switch (action.type) {
    case "a":
      return { sum: state.sum + 1 };

    case "b":
      return { sum: state.sum - 1 };

    default:
      return state;
  }
}

export const store = createStore(reducer);