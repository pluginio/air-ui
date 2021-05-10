import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Center } from '../../src'

export default {
  component: Center,
  title: 'Layout/Center'
} as Meta

const Template: Story = (args) => <Center {...args} />

export const Usage = Template.bind({})
Usage.args = {
  bg: "tomato",
  h: "100px",
  color: "white",
  children: "This is the Center"
}


