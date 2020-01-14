import React from "react";

import Note from "./Note";
import Button from "./Button";

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
        <React.Fragment key={note["_id"]}>
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
        </React.Fragment>
      );
    });
  } else {
    return <></>;
  }
};

export default NoteList;
