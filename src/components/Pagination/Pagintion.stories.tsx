import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './index';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: 'components/Pagination',
  args: {
    currentPage: 1,
    onChangePage: (pageNumber: number) => {
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {
};