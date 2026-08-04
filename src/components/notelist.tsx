import NoteCard from "./notecard";
import type { Note } from "./note";

type Props = {
  notes: Note[];
  deleteNote: (id: number) => void;
  editeNote: (note: Note) => void;
};
function NoteList({ notes, deleteNote, editeNote }: Props) {
  return (
    <div className="grid grid-cols-4 gap-3 mt-8 p-4">
      {notes.map((note) => (
        <NoteCard note={note} deleteNote={deleteNote} editeNote={editeNote} />
      ))}
    </div>
  );
}
export default NoteList;
