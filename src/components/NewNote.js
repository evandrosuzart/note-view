import React from "react";

import InputField from "./InputField";
import Title from "./Title";

import api from "../services/api";

class NewNote extends React.Component {
  state = {
    title: "",
    description: ""
  };

  handleSubmit = () => {
    const { description, title } = this.state;
    const bodyRequest = { title, description };
    api.post("/notes", bodyRequest);
  };
  handleChangeTitle = value => {
    this.setState({ title: value });
  };

  handleChangeDescription = value => {
    this.setState({ description: value });
  };

  render() {
    const { title, description } = this.state;
    return (
      <>
        <Title>Cadastrar nova Anotação</Title>
        <InputField
          value={title}
          handleChange={this.handleChangeTitle}
          title="Título"
        />
        <InputField
          value={description}
          title="Descrição"
          handleChange={this.handleChangeDescription}
        />
        <button onClick={this.handleSubmit}>Cadastrar</button>
      </>
    );
  }
}

export default NewNote;
