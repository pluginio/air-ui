import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Divider, DividerProps } from '../../src'

export default {
  component: Divider,
  title: 'Data Display/Divider'
} as Meta

const Template: Story<DividerProps> = (args) => <Divider {...args} />

export const Usage = Template.bind({})
Usage.args = {} as DividerProps
