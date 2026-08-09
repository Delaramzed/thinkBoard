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
    setIsFormOpen(true);
  };

  const [notes, setNotes] = useState<Note[]>([]);
  const [isFetchingNotes, setIsFetchingNotes] = useState(false);
  const [search, setSearch] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const filteredNotes = notes.filter((note) => {
    const searchText = search.trim().toLowerCase();

    if (!searchText) return true;
    return (
      note.title.toLowerCase().includes(searchText) ||
      note.content.toLowerCase().includes(searchText)
    );
  });

  useEffect(() => {
    const fetchNotes = async () => {
      setIsFetchingNotes(true);

      try {
        const res = await api.get<{ response: Note[] }>("/api/notes");

        setNotes(res.data.response);
      } catch (error: any) {
      } finally {
        setIsFetchingNotes(false);
      }
    };

    fetchNotes();
  }, []);

  const deleteNote = async (id: string) => {
    try {
      await api.delete(`/api/notes/${id}`);

      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  if (isFetchingNotes) return <Loading />;
  const submitForm = async (title: string, content: string, id?: string) => {
    try {
      if (id) {
        const res = await api.put(`/api/notes/${id}`, {
          title: title.trim(),
          content: content.trim(),
        });

        setNotes(
          notes.map((note) => (note.id === id ? res.data.response : note)),
        );

        setEditingNote(null);
      } else {
        const res = await api.post("/api/notes", {
          title: title.trim(),
          content: content.trim(),
        });

        setNotes((prevNotes) => [...prevNotes, res.data.response]);
      }
    } catch (error) {
      console.error(error);
    }
    setIsFormOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="min-h-screen app-background">
      <Header
        search={search}
        setSearch={setSearch}
        setIsFormOpen={setIsFormOpen}
        isDark={isDark}
        toggleDarkMode={toggleDarkMode}
      />

      <main>
        <h2 className="font-semibold text-2xl p-5 ">All notes</h2>
        <p className="text-sm text-gray-500 mt-1 pl-5">
          {notes.length} {notes.length === 1 ? "note" : "notes"}
        </p>
        {isFormOpen && (
          <div className="flex items-center justify-center fixed inset-0 bg-black/40 ">
            <div className="w-120 rounded-2xl shadow-xl bg-card text-text">
              <NoteForm
                submitForm={submitForm}
                editingNote={editingNote}
                setIsFormOpen={setIsFormOpen}
              />
            </div>
          </div>
        )}
        <NoteList
          notes={filteredNotes}
          deleteNote={deleteNote}
          editeNote={editeNote}
        />
      </main>
    </div>
  );
}

export default App;
