import NoteCard from "./notecard";
import type { Note } from "./note";

type Props = {
  notes: Note[];
  deleteNote: (id: number) => void;
  editeNote: (note: Note) => void;
};
function NoteList({ notes, deleteNote, editeNote }: Props) {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard note={note} deleteNote={deleteNote} editeNote={editeNote} />
      ))}
    </div>
  );
}
export default NoteList;
