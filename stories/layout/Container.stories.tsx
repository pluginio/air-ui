import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Container, ContainerProps } from '../../src'

export default {
  component: Container,
  title: 'Layout/Container'
} as Meta

const Template: Story<ContainerProps> = (args) => <Container {...args} />

export const Usage = Template.bind({})
Usage.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sollicitudin tempor id eu. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Risus in hendrerit gravida rutrum quisque non tellus orci. Imperdiet sed euismod nisi porta lorem. Lacinia at quis risus sed vulputate odio. Blandit aliquam etiam erat velit. Nisl vel pretium lectus quam id. Et ultrices neque ornare aenean euismod. Gravida arcu ac tortor dignissim convallis aenean. Eget arcu dictum varius duis. Porta nibh venenatis cras sed felis eget. Consequat semper viverra nam libero justo. Et ultrices neque ornare aenean. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Bibendum ut tristique et egestas quis ipsum. Risus pretium quam vulputate dignissim.'
} as ContainerProps
