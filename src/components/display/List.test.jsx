import React from 'react';
import { render } from '@testing-library/react';
import List from './List';
import { MemoryRouter } from 'react-router';

describe('List component', () => {
  const decks = [{ id: 1, name: 'Balthazor' }, { id: 2, name: 'Baru' }];

  it('renders List', () => {
    const { asFragment } = render(<MemoryRouter><List decks={decks} /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
