import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Box, BoxProps } from '../../src'

export default {
  component: Box,
  title: 'Layout/Box'
} as Meta

const Template: Story<BoxProps> = (args) => <Box {...args} />

export const Usage = Template.bind({})
Usage.args = {
  bg: "tomato",
  w: "100%",
  p: 4,
  color: "white",
  children: "This is the Box"
} as BoxProps