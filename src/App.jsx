import Comment from "./components/Comment";
import AddCommentForm from "./components/AddCommentForm";
import useCommentsList from "./hooks/useCommentsList";

export default function App() {
  const { commentsList, addComment } = useCommentsList();
  return (
    <div className="container">
      <h2>Seção de Comentários</h2>
      <AddCommentForm addComment={addComment} />
      <hr />
      <div className="comments">
        {commentsList.length === 0 ? (
          <p>Seja o primeiro à comentar!</p>
        ) : (
          commentsList.map(({ id, email, date, hour, text }) => {
            return (
              <Comment
                key={id}
                email={email}
                date={date}
                hour={hour}
                text={text}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
