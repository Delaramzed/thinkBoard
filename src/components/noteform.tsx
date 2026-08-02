import React, { useState } from "react";

function NoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit", title.length);
    if (title.length < 2 || title.length > 50) {
      setError("title must be between 2 and 50 characters");
      return;
    }
    setTitle("");
    setContent("");
    setError("");
  };
  return (
    <form
      onSubmit={submitForm}
      className="flex flex-col items-start p-6 gap-2 mt-10"
    >
      <input
        placeholder="Enter your note title here"
        type="text"
        value={title}
        onChange={handleTitleChange}
        // required
        className=" font-semibold focus:outline-none border border-gray-400 rounded-lg h-12 w-96"
      />
      {error && <p className="text-red-900 text-base">{error}</p>}

      <textarea
        placeholder="Enter your note content here"
        value={content}
        onChange={handleContentChange}
        required
        className=" resize-none outline-none focus:outline-none border border-gray-400 rounded-lg h-20 w-150 bg-transparent overflow-y-auto"
      ></textarea>
      <button className="bg-blue-500 rounded-xl w-30 h-10" type="submit">
        Create new note
      </button>
    </form>
  );
}
export default NoteForm;
