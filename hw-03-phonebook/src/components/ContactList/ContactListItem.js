import React from "react";
import PropTypes from "prop-types";
import styles from "../ContactList/Contact.module.css";
import { ReactComponent as Icon } from "../../icons/delete.svg";

const ContactListItem = ({ name, number, onRemove }) => {
  return (
    <>
      <li>
        {name} : {number}
      </li>

      <button className={styles.button} type="button" onClick={onRemove}>
        <Icon width="20" heigth="20" />
      </button>
    </>
  );
};
export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
