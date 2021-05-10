import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Kbd, KbdProps } from '../../src'

export default {
  component: Kbd,
  title: 'Data Display/Kbd'
} as Meta

const Template: Story<KbdProps> = (args) => <Kbd {...args} />

export const Usage = Template.bind({})
Usage.args = {
  children: "Shift"
} as KbdProps
