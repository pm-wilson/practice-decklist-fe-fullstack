import React from 'react';
import { render } from '@testing-library/react';
import Detail from './Detail';

describe('Detail component', () => {
  const details = { name: 'tim', photoUrl: 'www.google.com', eye: 'brown', hair: 'black', weapon: 'wind' };

  it('renders Detail', () => {
    const { asFragment } = render(<Detail details={details} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
