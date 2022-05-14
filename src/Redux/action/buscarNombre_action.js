import axios from "axios";
import { BUSCA_BY_NOMBRE } from "../types";

const buscarNombre_action = (dataSearch) => {
  return async (dispatch) => {
    const api = `https://api.themoviedb.org/3/search/movie?api_key=842a7b85faf02d432b2b6b3425408052&query=${dataSearch}`;
    const resultado = await axios.get(api);
    dispatch(mostrarNombre(resultado.data.results));
  };
};
export default buscarNombre_action;
const mostrarNombre = (data) => ({
  type: BUSCA_BY_NOMBRE,
  payload: data
});
