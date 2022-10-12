import Note from "./Note";
import { useEffect, useState } from "react";
import { getAllNotes, createNote } from "./services/notes/serviceNotes";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({
    title: "",
    body: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getAllNotes()
      .then((data) => {
        setNotes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("OCURRIO UN ERROR", error);
      });
  }, []);

  const handleChange = (e) => {
    setNewNote({
      ...newNote,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const noteToAddToState = {
      title: newNote.title,
      body: newNote.body,
      userId: 1,
    };

    createNote(noteToAddToState)
      .then((data) => {
        setNotes(([...notes]) => notes.concat(data));
      })
      .catch((error) => {
        console.log("Ocurrio un error mi llave: ", error);
      });
    setNewNote({
      title: "",
      body: "",
    });
  };

  return (
    <div className="App">
      <h2>Notes</h2>
      {loading ? "Cargando" : ""}
      <ol>
        {notes.map((note) => (
          <Note note={note} key={note.id} />
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={newNote.title}
        />
        <input
          type="text"
          name="body"
          placeholder="contenido"
          value={newNote.body}
          onChange={handleChange}
        />
        <button>Crear Nota</button>
      </form>
    </div>
  );
}

export default App;
