import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { IconButton, IconButtonProps } from "../../src"
import { BiSearch } from "react-icons/bi"

export default {
  component: IconButton,
  title: "Forms/IconButton",
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["solid", "outline"],
      },
    },
    colorScheme: {
      control: {
        type: "select",
        options: ["primary", "error", "warning", "success", "info"],
      },
    },
    isRound: { table: { disable: true } },
  },
} as Meta

const UsageTemplate: Story<IconButtonProps> = (args) => <IconButton {...args} />

export const Usage = UsageTemplate.bind({})
Usage.args = {
  variant: "solid",
  colorScheme: "primary",
  isRound: true,
  "aria-label": "Search",
  icon: <BiSearch size="1.25rem" />,
}
Usage.parameters = {
  docs: {
    source: {
      code: `
<IconButton aria-label="Search" icon={<BiSearch size="1.25rem"/>} />
`,
    },
  },
}
