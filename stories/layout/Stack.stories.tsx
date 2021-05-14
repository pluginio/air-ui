import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Stack, Box, StackProps } from "../../src"

export default {
  component: Stack,
  title: "Layout/Stack",
} as Meta

const UsageTemplate: Story<StackProps> = (args) => (
  <Stack direction={['column', 'row']} spacing='24px' {...args}>
    <Box w='40px' h='40px' bg='warning.500'>1</Box>
    <Box w='40px' h='40px' bg='error.500'>2</Box>
    <Box w='40px' h='40px' bg='primary.500'>3</Box>
  </Stack>
)
export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Stack direction={['column', 'row']} spacing='24px' {...args}>
  <Box w='40px' h='40px' bg='warning.500'>1</Box>
  <Box w='40px' h='40px' bg='error.500'>2</Box>
  <Box w='40px' h='40px' bg='primary.500'>3</Box>
</Stack>
`,
    },
  },
}
