/* eslint-disable react-hooks/rules-of-hooks */
import { Listbox } from '@headlessui/react'
import { Meta,Story } from '@storybook/react';
import React from 'react';

import { Button } from '@/components';

export default {
  title: 'Components/Select/Select',
  component: Listbox,
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
  <Listbox value={selectedPerson} onChange={setSelectedPerson}>
    <Listbox.Button className='text-white'>{selectedPerson.name}</Listbox.Button>
    <Listbox.Options className='text-white'>
      {options.map((option) => (
        <Listbox.Option key={option.id} value={option} as={React.Fragment} disabled={args.disabled}>
          {() => (
            <Button variant='outline' className='w-full mt-[39px]'>
              {option.name}
            </Button>
          )}
        </Listbox.Option>
      ))}
    </Listbox.Options>
  </Listbox>
)};

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
};