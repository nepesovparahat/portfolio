import { CREATE_COMMENT, GET_COMMENT, DELETE_COMMENT } from "../constant/types";

// ADD COMMENT
export const addComment = (contact) => ({
  type: CREATE_COMMENT,
  payload: contact,
});

// GET COMMENT
export const getComment = (id) => ({
  type: GET_COMMENT,
  payload: id,
});

// DELETE COMMENT
export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  payload: id,
});

// import axios from 'axios';
// import { url } from '../../api';

// export const addComment = (comment) => {
//     return (dispatch, getState) => {
//         axios
//         .post(`${url}/comment`,comment)
//         .then(comment => {
//            dispatch({
//             type:"ADD_COMMENT",
//             comment
//            })
//         })
//         .catch(error => {
//             console.log(error.response)
//         })
//     }
// }
