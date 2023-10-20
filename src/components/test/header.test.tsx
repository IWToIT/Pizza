import React from "react";
import { render } from "./test-utils";
import Header from "../Header";
import { screen } from "@testing-library/react";

it("отрисовка header с лого, тайтлом и поисковой строкой", () => {
  jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
  }));
  jest.mock("react-router-dom", () => ({
    useLocation: jest.fn(),
  }));
  render(<Header />);
  expect(screen.getByAltText("Pizza logo")).toBeInTheDocument();
  expect(screen.getByText("React Pizza V2")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Поиск пиццы...")).toBeInTheDocument();
  expect(screen.getByTestId('header-element')).toBeInTheDocument();
  expect(screen.getByTestId('header-element')).toMatchSnapshot();
});
