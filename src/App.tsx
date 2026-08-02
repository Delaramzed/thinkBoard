import "./App.css";
import Header from "./components/header";
import NoteForm from "./components/noteform";


function App() {
  return (
    <div className="min-h-screen bg-blue-100">
      <Header />
      <main>
        <NoteForm />
      </main>

    </div>
  );
}

export default App;
