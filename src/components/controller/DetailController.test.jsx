import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DetailController from './DetailController';
import { getDeckDetails } from '../../services/getDecksApi';
import { MemoryRouter, Route } from 'react-router-dom';

jest.mock('../../services/getDecksApi.js');

describe('DetailController component', () => {
  it('display a deck after a load screen', () => {
    getDeckDetails.mockResolvedValue({
      id: 1,
      deck: 'Deck 1',
      colors: 'G',
      format: 'Casual',
    });
    render(<MemoryRouter initialEntries={['/details/1']}>
      <Route path="/character/:id" component={getDeckDetails} />
    </MemoryRouter>);

    screen.getByText('Loading...');

    return waitFor(() => {
      screen.getByText('Deck 1');
      screen.getByText('G');
      screen.getByText('Casual');
    });
  });
});
