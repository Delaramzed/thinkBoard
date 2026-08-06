import React, { useState, useEffect } from "react";
import type { Note } from "./Note";

type Props = {
  submitForm: (title: string, content: string) => Promise<void>;
  editingNote: Note | null;
};

function NoteForm({ submitForm, editingNote }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setError("");
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.trim().length < 2 || title.trim().length > 50) {
      setError("Title must be between 2 and 50 characters");
      return;
    }

    if (content.trim().length < 10 || content.trim().length > 100) {
      setError("Content must be between 10 and 100 characters");
      return;
    }

    await submitForm(title, content);

    setTitle("");
    setContent("");
    setError("");
  };
  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editingNote]);
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start p-6 gap-2 mt-10"
    >
      <input
        placeholder="Enter your note title here"
        type="text"
        value={title}
        onChange={handleTitleChange}
        required
        className=" font-semibold focus:outline-none border border-gray-400 rounded-lg h-12 w-96 p-2"
      />
      {error && <p className="text-red-900 text-base">{error}</p>}

      <textarea
        placeholder="Enter your note content here"
        value={content}
        onChange={handleContentChange}
        required
        className=" resize-none outline-none focus:outline-none border border-gray-400 rounded-lg h-20 w-96 bg-transparent overflow-y-auto p-2"
      ></textarea>
      <button
        className="bg-blue-500 rounded-xl  h-10 p-2 hover:bg-blue-600 transition"
        type="submit"
      >
        Create new note
      </button>
    </form>
  );
}
export default NoteForm;
