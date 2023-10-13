import {render, screen} from '@testing-library/react'

import Search from '../Search/index';

test('Является ли inputRef null', () => {
  render(<Search/>)
  const inputElem = screen.getByPlaceholderText(/поиск пиццы/i)
  expect(inputElem).toBeInTheDocument();
})