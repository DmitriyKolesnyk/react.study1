import React, { Component } from "react";
import css from ".././Contacts/Contacts.module.css";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
    console.log(this.state);
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.formText} htmlFor={this.nameInputId}>
          Name{" "}
          <input
            className={css.input}
            type={"text"}
            name="name"
            required
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label className={css.formText} htmlFor={this.numberInputId}>
          Number{" "}
          <input
            className={css.input}
            type="tel"
            name="number"
            required
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </label>

        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
