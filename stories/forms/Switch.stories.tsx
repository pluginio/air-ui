import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Switch, SwitchProps } from '../../src'

export default {
  component: Switch,
  title: 'Forms/Switch'
} as Meta

const Template: Story<SwitchProps> = (args) => <Switch {...args} />

export const Usage = Template.bind({})
Usage.args = {
  colorScheme: 'primary',
  ml: '2'
} as SwitchProps
