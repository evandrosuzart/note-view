import React from "react";

class InputField extends React.Component {
  handleChange = value => {
    this.props.handleChange(value);
  };
  render() {
    const { value } = this.props;
    return (
      <div>
        <span>{this.props.title} : </span>
        <input
          type="text"
          defaultValue={value}
          onChange={evt => {
            this.handleChange(evt.target.value);
          }}
        />

        <br />
      </div>
    );
  }
}
export default InputField;
