import React from 'react';
import { render } from '@testing-library/react';
import List from './List';

describe('List component', () => {
  const decks = [{ id: 1, name: 'Balthazor' }, { id: 2, name: 'Baru' }];

  it('renders List', () => {
    const { asFragment } = render(<List decks={decks} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
