import React from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.contact} onSubmit={this.handleSubmit}>
        <h3>Name</h3>
        <input
          className={css.inpute}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          required
          placeholder="Name"
        />
        <h3>Number</h3>
        <input
          className={css.inpute}
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          required
          placeholder="Phone number"
        />
        <button className={css.add} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
