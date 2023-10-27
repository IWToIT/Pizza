import type { Meta } from '@storybook/react';

import NotFoundBlock from './index';

const meta: Meta<typeof NotFoundBlock> = {
  component: NotFoundBlock,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        {}
        <Story />
      </div>
    ),
  ],
};

export default meta;