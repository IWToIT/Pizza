import type { Meta, StoryObj } from "@storybook/react";
import { NotFound } from "./index";
// import { Provider } from "react-redux";
// import { store } from "../redux/store";
// import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof NotFound> = {
  component: NotFound,
  // decorators: [
  //   (Story) => (
  //     <BrowserRouter>
  //       <Provider store={store}>
  //         <Story />
  //       </Provider>
  //     </BrowserRouter>
  //   ),
  // ],
};

export default meta;
type Story = StoryObj<typeof NotFound>;

export const Primary: Story = {};
