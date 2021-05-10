import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Icon } from '../../src'
import { MdSettings } from 'react-icons/md'

export default {
  component: Icon,
  title: 'Media & Icons/Icon'
} as Meta

const Template: Story = (args) => <Icon {...args} />

export const Usage = Template.bind({})
Usage.args = {
  as: MdSettings,
  children: "Default"
}
