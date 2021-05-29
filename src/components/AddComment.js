import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../redux/action/commentAction";
import { deleteComment } from "../redux/action/commentAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

function AddComment() {
  let history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const userComments = useSelector((state) => state.comment.comments);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: shortid.generate(),
      title: title,
      comment: comment,
    };
    dispatch(addComment(newComment));
    history.push("/");
  };
  return (
    <section id="comments" className="portfolio-mf sect">
      <div className="container shadow bg-body rounded">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h2>Comments</h2>
            </div>

            <div className="col-md-6">
              {userComments.map((comment) => (
                <div key={comment.id}>
                  <div className="col-md-6 mb-3">
                    <h4>{comment.title}</h4>
                  </div>
                  <div className="col-md-6 mb-3">{comment.comment}</div>
                  <div className="col-md-6 mt-5 mb-5">
                    {" "}
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      onClick={() => dispatch(deleteComment(comment.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div classname="col-md-6 position-relative">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="col-md-12 mb-3">
                  <div className="form-group">
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="form-control"
                      placeholder="Title"
                      id="validationTooltip03"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      value={comment}
                      row={5}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                    />
                  </div>
                </div>
                <div class="col-12 mt-2">
                  <button class="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddComment;
