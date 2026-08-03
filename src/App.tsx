import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import NoteForm from "./components/noteform";
import NoteList from "./components/notelist";
import type { Note } from "./components/note";


function App() {
  const [notes , setNotes]=useState<Note[]>([]);
  const submitForm = (title: string, content: string)=>{
     const newNote :Note= {
      id: Date.now(),
      title,
      content,
    };
    setNotes([...notes,newNote])
  }
  return (
    <div className="min-h-screen bg-blue-100">
      <Header />
      <main>
        <NoteForm submitForm={submitForm}  />
        <NoteList  notes={notes}/>
      </main>

    </div>
  );
}

export default App;
