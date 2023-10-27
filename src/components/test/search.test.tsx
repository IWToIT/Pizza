import React from 'react';
import { screen } from '@testing-library/react'
import { render } from './test-utils';
import Search from '../Search/index';

test('is the placeholder displayed', () => {
  render(<Search />)
  const inputElem = screen.getByPlaceholderText(/поиск пиццы/i)
  expect(inputElem).toBeInTheDocument();
})