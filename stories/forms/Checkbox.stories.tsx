import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Checkbox, CheckboxProps } from "../../src"

export default {
  component: Checkbox,
  title: "Forms/Checkbox",
} as Meta

const UsageTemplate: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Checkbox />
`,
    },
  },
}
