import React from "react";

const Note = ({ note }) => {
  return (
    <li>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
    </li>
  );
};

export default Note;
