import Note from "./Note";
import { useState } from "react";
import "./App.css";

function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };

    setNotes([...notes, noteToAddToState]);
    setNewNote("");
  };

  return (
    <div className="App">
      {notes.map((note) => (
        <Note note={note} key={note.id} />
      ))}

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear Nota</button>
      </form>
    </div>
  );
}

export default App;
