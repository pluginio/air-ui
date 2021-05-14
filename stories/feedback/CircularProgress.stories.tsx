import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import {
  CircularProgress,
  CircularProgressLabel,
  CircularProgressProps,
} from "../../src"

export default {
  component: CircularProgress,
  title: "Feedback/CircularProgress",
  argTypes: {
    value: {
      defaultValue: 40,
      control: {
        type: "number",
        min: 0,
        max: 100,
        step: 1,
      },
    },
    color: {
      defaultValue: "#0078d4",
      control: {
        type: "color",
      },
    },
    size: {
      defaultValue: "48px",
      control: {
        type: "text",
      },
    },
    thickness: {
      defaultValue: "10px",
      control: {
        type: "text",
      },
    },
    isIndeterminate: {
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
  },
} as Meta

const UsageTemplate: Story<CircularProgressProps> = (args) => (
  <CircularProgress {...args} />
)

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<CircularProgress value={40} />
`,
    },
  },
}

const CircularProgressWithLabelTemplate: Story<CircularProgressProps> = (
  args,
) => (
  <CircularProgress {...args}>
    <CircularProgressLabel>{`${args.value}%`}</CircularProgressLabel>
  </CircularProgress>
)

export const CircularProgressWithLabel = CircularProgressWithLabelTemplate.bind({})
CircularProgressWithLabel.args = {}
CircularProgressWithLabel.parameters = {
  docs: {
    source: {
      code: `
<CircularProgress value={40}>
  <CircularProgressLabel>40%</CircularProgressLabel>
</CircularProgress>
`,
    },
  },
}
