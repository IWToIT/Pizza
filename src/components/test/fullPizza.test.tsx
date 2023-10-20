import React from "react";
import axios from "axios";
import { render } from "./test-utils";
import { screen, waitFor } from "@testing-library/react";
import FullPizza from "../../pages/FullPizza";

test('отображается ли пицца при успешном получении данных', async () => {
  // Mock axios.get to return a successful response with pizza data
  jest.spyOn(axios, 'get').mockResolvedValue({ data: { imageUrl: 'testImageUrl', title: 'testTitle', price: 'testPrice' } });
  const { getByAltText, getByText } = render(<FullPizza />);

  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

  expect(screen.getByTestId('container-element')).toBeInTheDocument();
  expect(screen.getByTestId('container-element')).toMatchSnapshot();
  expect(screen.getByAltText('testTitle')).toBeInTheDocument();
  expect(screen.getByText('testTitle')).toBeInTheDocument();
  expect(screen.getByText('testPrice ₽')).toBeInTheDocument();
});