import React from "react";
import api from "../services/api";
import Note from "./Note";

const handleUpdate = note => {
  const id = note["_id"];
  api.put(`/notes/${id}`, note);
};

const NoteList = ({ notes }) => {
  console.log(notes);

  if (notes) {
    return notes.map(note => {
      let data = note["createdAt"].toString();
      data = data.substring(0, 10);
      console.log(note);
      return (
        <>
          <Note
            key={note["_id"]}
            title={note["title"]}
            description={note["description"]}
            date={data}
          />
          <button
            onClick={() => {
              handleUpdate(note);
            }}
          >
            Salvar Alterações
          </button>
        </>
      );
    });
  } else {
    return <></>;
  }
};

export default NoteList;
