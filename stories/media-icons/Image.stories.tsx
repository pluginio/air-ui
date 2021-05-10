import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Image, ImageProps } from '../../src'

export default {
  component: Image,
  title: 'Media & Icons/Image'
} as Meta

const Template: Story<ImageProps> = (args) => <Image {...args} />

export const Usage = Template.bind({})
Usage.args = {
  src: "https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/banner_example.jpg?fbclid=IwAR0ZqTsSC1klaoEJTi3PIoqJpxAdmmvB6Eadm9frm6AehGjZURLsfkJffGo",
  alt: "cut the rope"
} as ImageProps
