import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Progress, ProgressProps } from '../../src'

export default {
  component: Progress,
  title: 'Feedback/Progress'
} as Meta

const Template: Story<ProgressProps> = (args) => <Progress {...args} />

export const Usage = Template.bind({})
Usage.args = {
  value: 80,
  isIndeterminate: false
} as ProgressProps
