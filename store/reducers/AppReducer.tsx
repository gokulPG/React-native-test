import * as types from "../../utils/Constants";

import { State, Action } from "../../utils/Types";

const initialState: State = {
  astroids: {
    name: "",
    nasa_jpl_url: "",
    is_potentially_hazardous_asteroid: false,
  },
  loading: false,
};

 const AppReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case types.SET_ASTROIDS:
      return {
        ...state,
        astroids: action.payload,
        loading: false,
      };

    case types.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};


export default AppReducer