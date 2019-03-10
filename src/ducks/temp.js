import { Map, fromJS, Record } from "immutable";
import { classNames } from 'classnames';

export const FIRST_API_REQUEST = "FIRST_API_REQUEST";
export const SUCCESSS = "SUCCESS";
export const GET_ROOT_FOLDERS_REQUEST = "GET_ROOT_FOLDERS_REQUEST";
export const GET_ROOT_FOLDERS_SUCCESS = "GET_ROOT_FOLDERS_SUCCESS";
export const GET_SUB_FOLDERS_REQUEST = "GET_SUB_FOLDERS_REQUEST";
export const GET_SUB_FOLDERS_SUCCESS = "GET_SUB_FOLDERS_SUCCESS";

export const requestAction = () => ({
    type: FIRST_API_REQUEST
})

export const successAction = data => ({
    type: SUCCESSS,
    data
})

export const getRootFolders = () => ({
    type: GET_ROOT_FOLDERS_REQUEST
})

export const getRootFolderSuccess = data => ({
    type: GET_ROOT_FOLDERS_SUCCESS,
    data
})

export const getSubFolders = (id, name) => ({
    type: GET_SUB_FOLDERS_REQUEST,
    id,
    name
})

export const getSubFolderSuccess = (id, data) => ({
    type: GET_SUB_FOLDERS_SUCCESS,
    id,
    data
})


const initialState = fromJS({
    data: {},
    rootFolders: {}
});

const temp = (state = initialState, action) => {
    switch (action.type) {
      case SUCCESSS:
        return state.set("data", fromJS(action.data));
      case GET_ROOT_FOLDERS_SUCCESS:
        return state.set("rootFolders", fromJS(action.data));
      case GET_SUB_FOLDERS_SUCCESS:
        return state.updateIn(["rootFolders", `${action.id}`], data => data.set("subFolder", fromJS(action.data)));
      default:
        return state;
    }
};
  
  export default temp;

  //state.setIn(["rootFolders", "TestFolder", "subFolder"], fromJS(action.data));


