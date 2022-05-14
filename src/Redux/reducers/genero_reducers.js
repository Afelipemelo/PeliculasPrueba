import { BUSCA_BY_GENERO } from "../types";
import { BUSCA_BY_NOMBRE } from "../types";

const inicialState = {
  datoGenero: []
};
export default (state = inicialState, action) => {
  switch (action.type) {
    case BUSCA_BY_GENERO:
      return {
        ...state,
        datoGenero: action.payload
      };
    case BUSCA_BY_NOMBRE:
      return {
        ...state,
        datoGenero: action.payload
      };
    default:
      return state;
  }
};
