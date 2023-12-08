import React from 'react';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => (
  <ul className={css.item}>
    {contacts.map(contact => (
      <li className={css.list} key={contact.id}>
        <div className={css.block}>
          {contact.name} : {contact.number}
        </div>
        <button className={css.delete} onClick={() => onDelete(contact.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
