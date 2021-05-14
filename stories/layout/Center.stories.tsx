import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Center, CenterProps } from "../../src"

export default {
  component: Center,
  title: "Layout/Center",
} as Meta

const UsageTemplate: Story<CenterProps> = (args) => <Center {...args} />
export const Usage = UsageTemplate.bind({})
Usage.args = {
  bg: "primary.500",
  h: "100px",
  color: "white",
  children: "This is the Center",
} as CenterProps
Usage.parameters = {
  docs: {
    source: {
      code: `
<Center bg="primary.500" w="100%" p="4" color="white">
  This is the Center
</Center>
`,
    },
  },
}
