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
      deck: 'Deck',
      colors: 'G',
      format: 'Casual',
    });
    render(<MemoryRouter initialEntries={['/details/1']}>
      <Route path="/details/:id" component={DetailController} />
    </MemoryRouter>);

    screen.getByText('Loading...');

    return waitFor(() => {
      screen.getByText('Deck:');
      screen.getByDisplayValue('Deck');
      screen.getByText('Colors:');
      screen.getByDisplayValue('G');
      screen.getByText('Format:');
      screen.getByDisplayValue('Casual');
    });
  });
});
