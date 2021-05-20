import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { RatingBar, RatingBarProps } from "../../src"

export default {
  component: RatingBar,
  title: "Forms/RatingBar",
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["sm", "lg"],
      },
    },
    value: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
} as Meta

const UsageTemplate: Story<RatingBarProps> = (args) => {
  return <RatingBar {...args} />
}

export const Usage = UsageTemplate.bind({})
Usage.args = {
  value: 0,
  size: "lg",
  editable: false,
}
