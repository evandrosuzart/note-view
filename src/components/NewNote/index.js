import React from "react";

import "./new-note.css";

import InputField from "../InputField";
import Title from "../Title";
import Button from "../Button";

class NewNote extends React.Component {
  state = {
    title: "",
    description: ""
  };

  onSubmit = () => {
    const { description, title } = this.state;
    const bodyRequest = { title, description };
    this.props.handleSubmit(bodyRequest);
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
      <div className="new-note">
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
        <Button onClick={this.onSubmit}>Cadastrar</Button>
      </div>
    );
  }
}

export default NewNote;
