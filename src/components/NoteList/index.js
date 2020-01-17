import React from "react";

import "./note-list.css";

import Note from "../Note";
import Button from "../Button";

const NoteList = ({
  notes,
  handleDelete,
  handleSaveUpdateNote,
  handleChangeDescription,
  handleChangeTitle,
  handleReloadAllNotes
}) => {
  const onChangeDescription = (description, index) => {
    handleChangeDescription(description, index);
  };
  const onChangeTitle = (description, index) => {
    handleChangeTitle(description, index);
  };

  const onSaveUpdateNote = note => {
    handleSaveUpdateNote(note);
  };
  if (notes) {
    return notes.map((note, index) => {
      return (
        <div className="note-list" key={note["_id"]}>
          <Note
            note={note}
            onDelete={handleDelete}
            onReloadAllNotes={handleReloadAllNotes}
            index={index}
            onChangeDescription={onChangeDescription}
            onChangeTitle={onChangeTitle}
          />
          <Button
            onClick={() => {
              onSaveUpdateNote(note);
            }}
          >
            Salvar Alterações
          </Button>
        </div>
      );
    });
  } else {
    return <></>;
  }
};

export default NoteList;
