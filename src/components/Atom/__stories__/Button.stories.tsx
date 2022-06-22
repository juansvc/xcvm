import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { Button } from '@/components/Atom/Button';

export default {
  title: 'Components/Button/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'primary',
    disabled: false,
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button className='w-[280px] h-[60px]' {...args} />
);

export const Default = Template.bind({});
Default.args = {};
