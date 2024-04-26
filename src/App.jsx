import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [commentText, setCommentText] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  function addComment(ev) {
    ev.preventDefault();
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const hour =
      (now.getHours() < 10 ? "0" : "") +
      now.getHours() +
      ":" +
      (now.getMinutes() < 10 ? "0" : "") +
      now.getMinutes() +
      ":" +
      (now.getSeconds() < 10 ? "0" : "") +
      now.getSeconds();

    const date =
      (day < 10 ? "0" : "") +
      day +
      "/" +
      (month < 10 ? "0" : "") +
      month +
      "/" +
      year;

    const comment = {
      text: commentText,
      email: email,
      date: date,
      hour: hour,
      id: commentsList.length,
    };

    setCommentsList((state) => [...state, comment]);
  }

  return (
    <div className="container">
      <h2>Seção de Comentários</h2>
      <form onSubmit={addComment}>
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
      <hr />
      <div className="comments">
        {commentsList.length === 0 ? (
          <p>Seja o primeiro à comentar!</p>
        ) : (
          commentsList.map((comment) => {
            return (
              <div className="comment" key={comment.id}>
                <h3>{comment.email}</h3>
                <p>
                  Em {comment.date}, {comment.hour}
                </p>
                <p>{comment.text}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
