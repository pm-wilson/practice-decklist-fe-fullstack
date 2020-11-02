import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ deck, colors, format, handleChange, handleSubmit, handleDelete }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Deck Details</h2> 
        <label>Deck:
          <input name="deck" onChange={handleChange} value={deck}></input>
        </label>
        <label>Colors:
          <input name="colors" onChange={handleChange} value={colors}></input>
        </label>
        <label>Format:
          <input name="format" onChange={handleChange} value={format}></input>
        </label>
        <button>Update</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

Detail.propTypes = {
  deck: PropTypes.string,
  colors: PropTypes.string,
  format: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default Detail;
