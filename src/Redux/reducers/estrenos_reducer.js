import { ESTRENOS } from "../types";

const initialState = {
  nvs_estrenos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ESTRENOS:
      return { ...state, nvs_estrenos: action.payload };
    default:
      return state;
  }
};
