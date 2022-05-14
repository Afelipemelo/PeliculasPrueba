import { combineReducers } from "redux";
import login_reducer from "../reducers/login_reducer";
import estrenos_reducer from "./estrenos_reducer";
import genero_reducers from "./genero_reducers";
import buscarNombre_reducer from "./buscarNombre_reducer";

export default combineReducers({
  isLogin: login_reducer,
  nvs_estrenos: estrenos_reducer,
  datoGenero: genero_reducers,
  datoNombre: buscarNombre_reducer
});
