import NoteCard from "./Notecard";
import type { Note } from "./Note";

type Props = {
  notes: Note[];
  deleteNote: (id: number) => void;
  editeNote: (note: Note) => void;
  
};
function NoteList({ notes, deleteNote, editeNote }: Props) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-3 mt-8 p-4  ">
      {notes.map((note) => (
        <NoteCard   key={note.id} note={note} deleteNote={deleteNote} editeNote={editeNote} />
      ))}
    </div>
  );
}
export default NoteList;
