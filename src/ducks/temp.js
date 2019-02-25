import { Map, fromJS } from "immutable";

export const FIRST_API_REQUEST = "FIRST_API_REQUEST";
export const SUCCESSS = "SUCCESS";

export const requestAction = () => ({
    type: FIRST_API_REQUEST
})

export const successAction = data => ({
    type: SUCCESSS,
    data
}) 

const initialState = Map({
    masseg: "nothing"
});

const temp = (state = initialState, action) => {
    switch (action.type) {
      case SUCCESSS:
        return state.set("masseg", fromJS(action.data));
      default:
        return state;
    }
  };
  
  export default temp;


