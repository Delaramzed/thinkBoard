function NoteForm() {
  return (
    <div className="flex flex-col items-start p-6 gap-2 mt-10">
      <input
        placeholder="Enter your note title here"
        type="text"
        className=" font-semibold focus:outline-none border border-gray-400 rounded-lg h-12 w-96"
      />

      <input
        placeholder="Enter your note content here"
        className=" resize-none outline-none focus:outline-none border border-gray-400 rounded-lg h-20 w-150 bg-transparent overflow-y-auto"
      ></input>
      <button className="bg-blue-500 rounded-xl w-30 h-10">
        Creat new note
      </button>
    </div>
  );
}
export default NoteForm;

