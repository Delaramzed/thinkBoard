import NoteCard from "./notecard";
import type { Note } from "./note";


type Props = {
  notes: Note[];
   deleteNote: (id: number) => void;
};
function NoteList({ notes , deleteNote }: Props) {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard note={note} deleteNote={deleteNote}/>
      ))}
    </div>
  );
}
export default NoteList;
