import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { SimpleGrid, Box, SimpleGridProps } from "../../src"

export default {
  component: SimpleGrid,
  title: "Layout/SimpleGrid",
} as Meta

const UsageTemplate: Story<SimpleGridProps> = (args) => (
  <SimpleGrid columns={2} spacing={10} {...args}>
    <Box bg="primary.500" height="80px"></Box>
    <Box bg="primary.500" height="80px"></Box>
    <Box bg="primary.500" height="80px"></Box>
    <Box bg="primary.500" height="80px"></Box>
    <Box bg="primary.500" height="80px"></Box>
  </SimpleGrid>
)
export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<SimpleGrid columns={2} spacing={10} {...args}>
  <Box bg="primary.500" height="80px"></Box>
  <Box bg="primary.500" height="80px"></Box>
  <Box bg="primary.500" height="80px"></Box>
  <Box bg="primary.500" height="80px"></Box>
  <Box bg="primary.500" height="80px"></Box>
</SimpleGrid>
`,
    },
  },
}
