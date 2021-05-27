import { CREATE_COMMENT, DELETE_COMMENT } from "../constant/types";

const intialState = {
  comments: [],
  comment: null,
};

export const commentReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        comments: [action.payload, ...state.comments],
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id != action.payload
        ),
      };
    default:
      return state;
  }
};
