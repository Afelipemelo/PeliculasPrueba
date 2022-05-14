import axios from "axios";
import { ESTRENOS } from "../types";

const consultar_estrenos_action = () => {
  return async (dispatch) => {
    const api =
      "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2022-03-22&primary_release_date.lte=2022-10-22&api_key=842a7b85faf02d432b2b6b3425408052";
    const resultado = await axios.get(api);
    dispatch(consultSucces(resultado.data.results));
  };
};
export default consultar_estrenos_action;

const consultSucces = (data) => ({
  type: ESTRENOS,
  payload: data
});
