import React from "react";
import { useDispatch } from "react-redux";
import { render } from "./test-utils";
import { fireEvent, screen } from "@testing-library/react";
import CartItem from "../CartItem";
import { addItem } from "../../redux/slices/cartSlice";

const props = {
  id: "1",
  title: "Pizza",
  type: "Margherita",
  size: [30],
  imageUrl: "pizza.jpg",
  count: 2,
  price: 10,
};

describe("props", () => {
  test("должна сработать кнопка добавить со всеми вытекающими", () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
    render(<CartItem {...props} />);
    fireEvent.click(screen.getByRole("button", { name: /plus/i }));
    expect(dispatchMock).toHaveBeenCalledWith(addItem({ id: props.id }));
  });
});
