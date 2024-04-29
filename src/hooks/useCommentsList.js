import { useState } from "react";

export default function useCommentsList() {
  const [commentsList, setCommentsList] = useState(() => {
    const storedComments = localStorage.getItem("comments-list");
    if (!storedComments) return [];
    const commentsArray = JSON.parse(storedComments);
    return commentsArray;
  });

  function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return (
      (day < 10 ? "0" : "") +
      day +
      "/" +
      (month < 10 ? "0" : "") +
      month +
      "/" +
      year
    );
  }

  function formatHours(date) {
    return (
      (date.getHours() < 10 ? "0" : "") +
      date.getHours() +
      ":" +
      (date.getMinutes() < 10 ? "0" : "") +
      date.getMinutes() +
      ":" +
      (date.getSeconds() < 10 ? "0" : "") +
      date.getSeconds()
    );
  }

  function addComment(text, email, actuallyDate, id) {
    const comment = {
      text: text,
      email: email,
      date: formatDate(actuallyDate),
      hour: formatHours(actuallyDate),
      id: id,
    };

    setCommentsList((state) => {
      const newState = [...state, comment];
      localStorage.setItem("comments-list", JSON.stringify(newState));
      return newState;
    });
  }

  return { commentsList, addComment };
}
