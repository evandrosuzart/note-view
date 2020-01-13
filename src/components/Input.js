import React from "react";

class Input extends React.Component {
  state = {
    desabilitado: true
  };

  toogleInput = desabilitado => {
    this.setState({
      desabilitado: !desabilitado
    });
  };

  handleChange = value => {
    this.props.handleChange(value);
  };
  render() {
    const { desabilitado } = this.state;
    const { value } = this.props;
    return (
      <div
        onDoubleClick={() => {
          this.toogleInput(desabilitado);
        }}
      >
        <span>{this.props.title} : </span>

        {desabilitado === true ? (
          <span>
            {value}
            {"    "}
          </span>
        ) : (
          <input
            type="text"
            defaultValue={value}
            disabled={desabilitado}
            onKeyPress={evt => {
              if (evt.key === "Enter") {
                this.toogleInput(desabilitado);
              }
            }}
            onChange={evt => {
              this.handleChange(evt.target.value);
            }}
          />
        )}

        <br />
      </div>
    );
  }
}
export default Input;
