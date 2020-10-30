import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ deck, colors, format }) => {
  return (
    <div>
      <form>
        <label>Deck:
          <input value={deck}></input>
        </label>
        <label>Colors:
          <input value={colors}></input>
        </label>
        <label>Format:
          <input value={format}></input>
        </label>
        <button>Update</button>
      </form>
      <button>Delete</button>
    </div>
  );
};

Detail.PropTypes = {
  deck: PropTypes.string,
  colors: PropTypes.string,
  format: PropTypes.string,
};

export default Detail;
