import React, { useState, useEffect } from 'react';
import { getDeckDetails } from '../../services/getDecksApi';
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

  if(loading) return <h1 data-testid="listtestloading">Loading...</h1>;

  return (
    <div>
      <Detail details={details}></Detail>
    </div>
  );
};

DetailController.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  })
};

export default DetailController;
