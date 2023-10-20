import React from "react";
import Sort from "../Sort";
import { fireEvent, render } from "./test-utils";
import { screen } from '@testing-library/react'

it('должно не закрывать попап окно при клике на область вне попап блока', () => {
  render(<Sort />);
  fireEvent.click(document.body);
  expect(screen.getByTestId('sort-element')).toBeInTheDocument();
  expect(screen.getByTestId('sort-element')).toMatchSnapshot();
});