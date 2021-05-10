import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { AspectRatio, AspectRatioProps, Image } from '../../src'

export default {
  component: AspectRatio,
  title: 'Layout/AspectRatio'
} as Meta

const Template: Story<AspectRatioProps> = (args) => <AspectRatio {...args} />

export const Usage = Template.bind({})
Usage.args = {
  children: <Image></Image>
} as AspectRatioProps
