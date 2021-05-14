import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Box, BoxProps } from "../../src"

export default {
  component: Box,
  title: "Layout/Box",
} as Meta

const UsageTemplate: Story<BoxProps> = (args) => <Box {...args}/>
export const Usage = UsageTemplate.bind({})
Usage.args = {
  bg: "primary.500",
  w: "100%",
  p: 4,
  color: "white",
  children: "This is the Box",
} as BoxProps
Usage.parameters = {
  docs: {
    source: {
      code: `
<Box bg="primary.500" w="100%" p="4" color="white">
  This is the Box
</Box>
`,
    },
  },
}
