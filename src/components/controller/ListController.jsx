import React, { useState, useEffect } from 'react';
import { getDecks, addNewDeck } from '../../services/getDecksApi';
import List from '../display/List';

const ListController = () => {
  const [loading, setLoading] = useState(true);
  const [decks, setDecks] = useState([]);
  const [newDeckName, setNewDeckName] = useState('');
  const [newDeckColors, setNewDeckColors] = useState('');
  const [newDeckFormat, setNewDeckFormat] = useState('');

  useEffect(() => {
    getDecks()
      .then(decks => setDecks(decks))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = ({ target }) => {
    if(target.name === 'deck') setNewDeckName(target.value);
    if(target.name === 'colors') setNewDeckColors(target.value);
    if(target.name === 'format') setNewDeckFormat(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    addNewDeck({
      deck: newDeckName,
      colors: newDeckColors,
      format: newDeckFormat,
    })
      .then(newDeck => setDecks(decks => [newDeck, ...decks]))
      .finally(setLoading(false));
  };

  if(loading) return <h1 data-testid="listtestloading">Loading...</h1>;

  return (
    <div>
      <List
        decks={decks}
        newDeckName={newDeckName}
        newDeckColors={newDeckColors}
        newDeckFormat={newDeckFormat}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default ListController;
