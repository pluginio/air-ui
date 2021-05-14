import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Progress, ProgressProps } from "../../src"

export default {
  component: Progress,
  title: "Feedback/Progress",
} as Meta

const UsageTemplate: Story<ProgressProps> = (args) => <Progress {...args} />

export const Usage = UsageTemplate.bind({})
Usage.args = {
  value: 80,
  isIndeterminate: false,
} as ProgressProps
Usage.parameters = {
  docs: {
    source: {
      code: `
<Progress value={80} />
`,
    },
  },
}
