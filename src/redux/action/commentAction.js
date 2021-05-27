import { CREATE_COMMENT, DELETE_COMMENT } from "../constant/types";

// ADD COMMENT
export const addComment = (contact) => ({
  type: CREATE_COMMENT,
  payload: contact,
});

// DELETE COMMENT
export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  payload: id,
});

