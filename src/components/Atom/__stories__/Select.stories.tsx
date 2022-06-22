/* eslint-disable react-hooks/rules-of-hooks */
import { Meta,Story } from '@storybook/react';
import React from 'react';

import { Button, Select } from '@/components';

export default {
  title: 'Components/Select/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => {

  const options = [
    { id: 1, name: 'SELECT AN OPTION' },
    { id: 2, name: 'SELECT 1' },
    { id: 3, name: 'SELECT 2' },
    { id: 4, name: 'SELECT 3' },
  ]
  const [selectedPerson, setSelectedPerson] = React.useState(options[0]);

  return(
  <Select value={selectedPerson} onChange={setSelectedPerson}>
    <Select.Button className='text-white'>{selectedPerson.name}</Select.Button>
    <Select.Options className='text-white'>
      {options.map((option) => (
        <Select.Option key={option.id} value={option} as={React.Fragment} disabled={args.disabled}>
          {() => (
            <Button variant='outline' className='w-full mt-[39px]'>
              {option.name}
            </Button>
          )}
        </Select.Option>
      ))}
    </Select.Options>
  </Select>
)};

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
};