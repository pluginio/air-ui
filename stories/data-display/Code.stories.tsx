import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Code, CodeProps, Stack } from '../../src'

export default {
  component: Code,
  title: 'Data Display/Code'
} as Meta

const Template: Story<CodeProps> = (args) => <Code {...args} />

export const Usage = Template.bind({})
Usage.args = {
  colorScheme: "blue",
  children: "Hello world"
} as CodeProps

export const Colors = () => (
<Stack direction="row">
  <Code children="console.log(welcome)" />
  <Code colorScheme="red" children="let air = 'awesome!'" />
  <Code colorScheme="yellow" children="npm install air-ui" />
</Stack>
)
