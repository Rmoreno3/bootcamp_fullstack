import React from "react";

const Note = ({ note }) => {
  return (
    <ul>
      <time>{note.date}</time>
      <li>{note.content}</li>
    </ul>
  );
};

export default Note;
