import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const List = ({ 
  decks,
  newDeckName,
  newDeckColors,
  newDeckFormat,
  handleChange,
  handleSubmit,
}) => {

  //needs to update state when form is changed
  //needs to update decklist when form is submitted
  //needs to rerender page
  return (
    <div>   
      <form onSubmit={handleSubmit}>
        <h2>New Deck</h2>   
        <label>Deck Name
          <input name="deck" onChange={handleChange} value={newDeckName}></input>
        </label>
        <label>Colors
          <input name="colors" onChange={handleChange} value={newDeckColors}></input>
        </label>
        <label>Format
          <input name="format" onChange={handleChange} value={newDeckFormat}></input>
        </label>
        <button>Add Deck</button>
      </form>
      <div>
        <h2>Deck List</h2>
        {decks.map(deck => {
          return (
            <div key={deck.id}>
              <Link to={`/details/${deck.id}`}>{deck.deck}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

List.propTypes = {
  decks: PropTypes.array,
  newDeckName: PropTypes.string,
  newDeckColors: PropTypes.string,
  newDeckFormat: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default List;
