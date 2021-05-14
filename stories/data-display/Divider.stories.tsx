import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Divider, DividerProps } from '../../src'

export default {
  component: Divider,
  title: 'Data Display/Divider'
} as Meta

const UsageTemplate: Story<DividerProps> = (args) => <Divider {...args} />

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Divider />
`,
    },
  },
}