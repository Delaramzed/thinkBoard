import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import NoteForm from "./components/noteform";
import NoteList from "./components/notelist";
import type { Note } from "./components/note";

function App() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const saveNote = localStorage.getItem("notes");
    return saveNote ? JSON.parse(saveNote) : [];
  });

  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const editeNote = (note: Note) => {
    setEditingNote(note);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const submitForm = (title: string, content: string) => {
  if (editingNote) {
    const updatedNotes = notes.map((note) => {
      if (note.id === editingNote.id) {
        return {
          ...note,
          title,
          content,
        };
      }

      return note;
    });

    setNotes(updatedNotes);
    setEditingNote(null);

  } else {
    const newNote: Note = {
      id: Date.now(),
      title,
      content,
    };

    setNotes([...notes, newNote]);
  }
};
     
  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  return (
    <div className="min-h-screen bg-blue-200">
      <Header />
      
      <main >
        <NoteForm submitForm={submitForm} editingNote={editingNote} />
        <NoteList notes={notes} deleteNote={deleteNote} editeNote={editeNote} />
      </main>
    </div>
  );
}

export default App;
