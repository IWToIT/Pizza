import React from "react";
import Categories from "../Categories";
import { render } from "./test-utils";
import { screen, within } from "@testing-library/react";

test('выделение активной категории', () => {
  const value = 2;
  const onChangeCategory = jest.fn();
  render(<Categories value={value} onChangeCategory={onChangeCategory} />);
  const categoryList = screen.getByRole('list');
  const categoryItems = within(categoryList).getAllByRole('listitem');
  expect(categoryItems[2]).toHaveClass('active');
});