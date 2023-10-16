import React from "react";
import Sort from "../Sort";
import { fireEvent, render } from "./test-utils";
import { screen } from '@testing-library/react'

it('should not close the sort popup when clicking outside the sort component', () => {
  render(<Sort />);
  fireEvent.click(document.body);
  expect(screen.getByTestId('custom-element')).toBeInTheDocument();
});