import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { IconButton, IconButtonProps } from '../../src'
import { BiSearch } from 'react-icons/bi'

export default {
  component: IconButton,
  title: 'Forms/IconButton',
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['solid', 'outline']
      }
    },
    colorScheme: {
      control: {
        type: 'select',
        options: ['primary', 'error', 'warning', 'success', 'info']
      }
    },
    isRound: { table: { disable: true } }
  }
} as Meta

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />

export const Usage = Template.bind({})
Usage.args = {
  variant: "solid",
  colorScheme: "primary",
  isRound: true,
  "aria-label": "Search",
  icon: <BiSearch size="1.25rem"/>
} as IconButtonProps
