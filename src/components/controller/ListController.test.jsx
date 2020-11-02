import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ListController from './ListController';
import { getDecks } from '../../services/getDecksApi';

jest.mock('../../services/getDecksApi.js');

describe('ListController component', () => {
  it('displays a list of decks after a brief load screen', async() => {
    getDecks.mockResolvedValue([
      { id: 1, deck: 'Deck1', colors: 'WUB', format: 'Commander' }
    ]);
    render(<MemoryRouter>
      <ListController />
    </MemoryRouter>);

    screen.getByText('Loading...');

    const deckList = await screen.findByTestId('deckslist');

    return waitFor(() => {
      expect(deckList).not.toBeEmptyDOMElement();
    });
  });
});
