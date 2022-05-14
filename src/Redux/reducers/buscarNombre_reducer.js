import { BUSCA_BY_NOMBRE } from "../types";

const incialState = {
  datoNombre: []
};

export default (state = incialState, action) => {
  switch (action.type) {
    case BUSCA_BY_NOMBRE:
      return {
        ...state,
        datoNombre: action.payload
      };
    default:
      return state;
  }
};
