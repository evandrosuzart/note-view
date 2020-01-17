import React from "react";

class DateInput extends React.Component {
  state = {
    desabilitado: true,
    valorBotao: "Editar"
  };

  render() {
    const { value } = this.props;
    return (
      <>
        <span>Data de criação : </span>
        <input type="date" disabled value={value} />
      </>
    );
  }
}

export default DateInput;
