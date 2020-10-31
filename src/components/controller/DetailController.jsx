import React, { useState, useEffect } from 'react';
import { getDeckDetails, updateDeckDetails } from '../../services/getDecksApi';
import Detail from '../display/Detail';
import PropTypes from 'prop-types';

const DetailController = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});

  useEffect(() => {
    getDeckDetails(match.params.id)
      .then(details => setDetails(details))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = ({ target }) => {
    if(target.name === 'deck') setDetails({ deck: target.value, colors: details.colors, format: details.format });
    if(target.name === 'colors') setDetails({ deck: details.deck, colors: target.value, format: details.format });
    if(target.name === 'format') setDetails({ deck: details.deck, colors: details.colors, format: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateDeckDetails(match.params.id, {
      deck: details.deck,
      colors: details.colors,
      format: details.format,
    })
      .then(() => window.location = '/');
  };
  
  if(loading) return <h1 data-testid="listtestloading">Loading again...</h1>;

  return (
    <div>
      <Detail 
        deck={details.deck}
        colors={details.colors}
        format={details.format}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      ></Detail>
    </div>
  );
};

DetailController.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  })
};

export default DetailController;
