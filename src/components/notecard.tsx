type Props = {
  title: string;
  content: string;
};
function NoteCard({ title, content }: Props) {
  return (
    <div className="flex flex-col bg-blue-300 rounded-xl w-100 h-40 px-5 py-4">
      <h2 className="font-bold text-lg w-full ">{title}</h2>
      <p className="mt-2 text-gray-600 text-base w-full">{content}</p>
    </div>
  );
}
export default NoteCard;
