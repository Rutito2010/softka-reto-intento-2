import {
  GET_ALL,
  SET_DEFAULT,
  FILTER,
  POST_ITEM,
  POST_ITEM_1,
  DELETE_ITEM,
} from "../constants";

const initialState = {
  allItems: [],
  filteredItems: [],
  newItem: {},
  primeraVez: [],
  deleteItem: {},
};
/*------------------ Reducers -------------------*/
export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    /*-------------- GET --------------*/

    case GET_ALL:
      return {
        ...state,
        allItems: payload,
        filteredItems: payload,
      };

    /*-------------- SET DEFAULT --------------*/

    case SET_DEFAULT:
      return {
        ...state,
        filteredItems: state.allItems,
      };

    

    /*-------------- FILTER --------------*/

    case FILTER:
      if (payload !== "Default") {
        const filtered = state.allItems.filter((t) => {
          return t.tipo === payload;
        });
        return {
          ...state,
          filteredItems: filtered,
        };
      } else {
        return {
          ...state,
          filteredItems: state.allItems,
        };
      }


    /*-------------- CREATE --------------*/

    case POST_ITEM:
      return {
        ...state,
        newItem: payload,
      };

    case POST_ITEM_1:
      return {
        ...state,
        primeraVez: payload,
      };

    /*-------------- DELETE --------------*/

    case DELETE_ITEM:
      return {
        ...state,
        deleteItem: payload,
      };

    /*-------------- ABSOLUTE DEFAULT --------------*/

    default:
      return state;
  }
}
