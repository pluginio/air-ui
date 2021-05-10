import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Avatar, AvatarProps } from '../../src'

export default {
  component: Avatar,
  title: 'Media & Icons/Avatar'
} as Meta

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Usage = Template.bind({})
Usage.args = {
  name: "ninnjak",
  src: "https://avatars.githubusercontent.com/u/23258994"
} as AvatarProps
