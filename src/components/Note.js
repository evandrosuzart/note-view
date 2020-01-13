import React from "react";
import Input from "./Input";
import DateInput from "./DateInput";
class Note extends React.Component {
  state = {
    title: this.props.title,
    description: this.props.description,
    date: this.props.date
  };
  handleChangeTitle = value => {
    this.setState({ title: value });
  };

  handleChangeDescription = value => {
    this.setState({ description: value });
  };

  handleChangeDate = value => {
    this.setState({ date: value });
  };

  render() {
    const { description, title, date } = this.state;
    if (!date) {
      let dia = new Date().getDate().toString();

      let mes =
        new Date().getMonth() + 1 <= 9
          ? "0" + (new Date().getMonth() + 1).toString()
          : (new Date().getMonth() + 1).toString();

      let ano = new Date().getFullYear().toString();
      let data = ano + "-" + mes + "-" + dia;
      this.setState({ date: data });
    }
    return (
      <>
        <Input
          value={title}
          title="Título"
          handleChange={this.handleChangeTitle}
        />
        <Input
          value={description}
          title="Descrição"
          handleChange={this.handleChangeDescription}
        />
        <DateInput type="date" value={date} />
      </>
    );
  }
}
export default Note;
