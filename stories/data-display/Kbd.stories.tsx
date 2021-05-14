import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Kbd, KbdProps } from '../../src'

export default {
  component: Kbd,
  title: 'Data Display/Kbd'
} as Meta

const UsageTemplate: Story<KbdProps> = (args) => (
  <span>
    <Kbd>shift</Kbd> + <Kbd>H</Kbd>
  </span>
)

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<span>
  <Kbd>shift</Kbd> + <Kbd>H</Kbd>
</span>
`,
    },
  },
}