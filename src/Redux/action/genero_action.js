import axios from "axios";
import { BUSCA_BY_GENERO } from "../types";
import { BUSCA_BY_NOMBRE } from "../types";

const Genero = ({ dataSearch }) => {
  return async (dispatch) => {
    const { nombrePeli, idGenero } = dataSearch;

    if (idGenero !== "") {
      const api = `https://api.themoviedb.org/3/discover/movie?api_key=842a7b85faf02d432b2b6b3425408052&with_genres=${idGenero}`;
      const resultado = await axios.get(api);
      dispatch(mostrarGenero(resultado.data.results));
    }
    if (nombrePeli !== "") {
      const api = `https://api.themoviedb.org/3/search/movie?api_key=842a7b85faf02d432b2b6b3425408052&query=${nombrePeli}`;
      const resultado = await axios.get(api);
      dispatch(mostrarNombre(resultado.data.results));
    }
  };
};
export default Genero;

const mostrarGenero = (data) => ({
  type: BUSCA_BY_GENERO,
  payload: data
});
const mostrarNombre = (data) => ({
  type: BUSCA_BY_NOMBRE,
  payload: data
});
