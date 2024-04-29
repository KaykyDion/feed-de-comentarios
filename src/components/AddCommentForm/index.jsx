import { useState } from "react";
import PropTypes from "prop-types";

AddCommentForm.propTypes = {
  addComment: PropTypes.func,
};

export default function AddCommentForm({ addComment }) {
  const [email, setEmail] = useState("");
  const [commentText, setCommentText] = useState("");

  function handleSubmit(ev) {
    ev.preventDefault();
    const id = Math.floor(Math.random() * 100000000);
    addComment(commentText, email, new Date(), id);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="comment">Comentário</label>
        <textarea
          id="comment"
          cols="30"
          rows="10"
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Enviar comentário</button>
    </form>
  );
}
