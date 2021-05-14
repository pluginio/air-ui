import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Spinner, SpinnerProps } from "../../src"

export default {
  component: Spinner,
  title: "Feedback/Spinner",
} as Meta

const UsageTemplate: Story<SpinnerProps> = (args) => <Spinner {...args} />

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Spinner />
`,
    },
  },
}
