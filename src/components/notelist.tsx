import NoteCard from "./notecard";
import type { Note } from "./note";


type Props = {
  notes: Note[];
};
function NoteList({ notes }: Props) {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard title={note.title} content={note.content} />
      ))}
    </div>
  );
}
export default NoteList;
