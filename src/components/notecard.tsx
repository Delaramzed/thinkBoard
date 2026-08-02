type Props = {
  title: string;
  content: string;
};
function NoteCard({ title, content }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
export default NoteCard;
