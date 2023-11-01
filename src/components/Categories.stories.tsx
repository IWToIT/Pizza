import type { Meta, StoryObj } from "@storybook/react";
import { Categories } from "./Categories";

const meta: Meta<typeof Categories> = {
  component: Categories 
};

export default meta;
type Story = StoryObj<typeof Categories>;

export const Primary: Story = {};
