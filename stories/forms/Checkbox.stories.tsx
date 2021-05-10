import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Checkbox, CheckboxProps } from '../../src'

export default {
  component: Checkbox,
  title: 'Forms/Checkbox'
} as Meta

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const Usage = Template.bind({})
Usage.args = {} as CheckboxProps
