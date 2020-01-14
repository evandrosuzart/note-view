import React from "react";

import Input from "./Input";
import DateInput from "./DateInput";
import Button from "./Button";

const Note = ({
  note,
  onChangeTitle,
  onChangeDescription,
  onDelete,
  onReloadAllNotes,
  index
}) => {
  let { _id, title, description, createdAt } = note;
  let date = createdAt.toString().substring(0, 10);

  const handleChangeDescription = description => {
    onChangeDescription(description, index);
  };

  const handleChangeTitle = description => {
    onChangeTitle(description, index);
  };

  const handleReloadAllNotes = () => {
    onReloadAllNotes();
  };

  return (
    <>
      <Input value={title} title="Título" handleChange={handleChangeTitle} />
      <Input
        value={description}
        title="Descrição"
        handleChange={handleChangeDescription}
      />
      <DateInput type="date" value={date} />
      <Button
        onClick={() => {
          onDelete(_id);
          handleReloadAllNotes();
        }}
      >
        Excluir Nota
      </Button>
    </>
  );
};

export default Note;
