import React from "react";
import PropTypes from "prop-types";

const Filter = ({ onChange }) => {
  return (
    <>
      Find contacts by name:
      <input
        placeholder="Search..."
        type="text"
        name="filter"
        onChange={onChange}
      />
    </>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default Filter;
