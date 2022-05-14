import { IS_LOGIN } from "../types";

const initialState = {
  isLogin: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGIN:
      return { ...state, isLogin: action.payload };
    default:
      return state;
  }
};
