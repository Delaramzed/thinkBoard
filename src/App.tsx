import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import NoteForm from "./components/Noteform";
import NoteList from "./components/Notelist";
import type { Note } from "./components/Note";
import { Loading } from "./components/Loading";
import { api } from "./axios";

function App() {
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const editeNote = (note: Note) => {
    setEditingNote(note);
  };
  const [isDeleting, setIsDeleting] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);
  const [isFetchingNotes, setIsFetchingNotes] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      setIsFetchingNotes(true);

      try {
        const res = await api.get<{ response: Note[] }>("/api/notes");
        setNotes(res.data.response);
      } catch (error: any) {
        console.log("API ERROR:", error.response?.data);
      } finally {
        setIsFetchingNotes(false);
      }
    };

    fetchNotes();
  }, []);

  const deleteNote = async (id: string) => {
    setIsDeleting(true);

    try {
      await api.delete(`/api/notes/${id}`);

      setNotes(notes.filter((note) => note.id !== id));
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  if (isFetchingNotes) return <Loading />;

  const submitForm = async (title: string, content: string) => {
    try {
      const body = {
        title: title.trim(),
        content: content.trim(),
      };

      const res = await api.post("/api/notes", body);

      setNotes((prevNotes) => [...prevNotes, res.data.response]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-blue-200">
      <Header />

      <main>
        <NoteForm submitForm={submitForm} editingNote={editingNote} />
        <NoteList notes={notes} deleteNote={deleteNote} editeNote={editeNote} />
      </main>
    </div>
  );
}

export default App;
