import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { CloseButton, CloseButtonProps } from '../../src'

export default {
  component: CloseButton,
  title: 'Data Display/CloseButton'
} as Meta

const Template: Story<CloseButtonProps> = (args) => <CloseButton {...args} />

export const Usage = Template.bind({})
Usage.args = {} as CloseButtonProps
