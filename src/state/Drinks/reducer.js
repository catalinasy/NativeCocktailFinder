import { SET_FETCHING, SET_DRINKS, CLEAR_DRINKS } from "./constants";

const initialState = {
  isFetching: false,
  drinks: {}
};

const drinksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case SET_DRINKS:
      return {
        ...state,
        isFetching: false,
        drinks: action.payload
      };
    case CLEAR_DRINKS:
      return {
        ...state,
        drinks: {}
      };
    default:
      return state;
  }
};
export default drinksReducer;
