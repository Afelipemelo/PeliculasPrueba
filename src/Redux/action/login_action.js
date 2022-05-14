import { IS_LOGIN } from "../types";

const login_action = (islogin) => {
  return (dispatch) => {
    localStorage.setItem(2, islogin);
    dispatch({ type: IS_LOGIN, payload: islogin });
  };
};
export default login_action;
