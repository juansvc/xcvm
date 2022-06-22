import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { Input } from '@/components/Atom/Input';

export default {
  title: 'Components/Input/Input',
  component: Input,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);

export const Default = Template.bind({});
Default.args = {};
