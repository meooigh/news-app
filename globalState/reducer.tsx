import { dataType } from "../components/Home";
import { SET_STATE, SET_TITLE, SET_CONTENT, SET_IMAGE, SET_POSTS } from "./action";
import { ACTIONTYPE } from "./action";
import { Reducer } from "react";

export type typeState = {
  set: string;
  stateArray: Array<string>;
  title: string;
  content: string;
  image: string;
  dummyDataList: dataType[];
};

export const initialState: typeState = {
  set: "local",
  stateArray: [],
  title: "",
  content: "",
  image: "",
  dummyDataList: [],
};

const reducer: Reducer<typeState, ACTIONTYPE> = (
  state = initialState,
  action: ACTIONTYPE
) => {
  switch (action.type) {
    case SET_STATE:
      return {
        ...state,
        set: action.payload || state.set,
      };
    case SET_TITLE:
      return {
        ...state,
        title: action.payload || state.title,
      };
    case SET_CONTENT:
      return {
        ...state,
        content: action.payload || state.content,
      };
    case SET_IMAGE:
      return {
        ...state,
        image: action.payload || state.image,
      };
    case SET_POSTS:
      return {
        ...state,
        dummyDataList: action.array,
      };
    default:
      return state;
  }
};

export default reducer;
