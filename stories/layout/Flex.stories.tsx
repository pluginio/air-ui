import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Flex, Center, Square, Box, Text, FlexProps } from "../../src"

export default {
  component: Flex,
  title: "Layout/Flex",
} as Meta

const UsageTemplate: Story<FlexProps> = (args) => (
  <Flex color="white" {...args}>
    <Center w="100px" bg="success.500">
      <Text>Box 1</Text>
    </Center>
    <Square bg="primary.500" size="150px">
      <Text>Box 2</Text>
    </Square>
    <Box flex="1" bg="error.500">
      <Text>Box 3</Text>
    </Box>
  </Flex>
)
export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Flex color="white">
  <Center w="100px" bg="success.500">
    <Text>Box 1</Text>
  </Center>
  <Square bg="primary.500" size="150px">
    <Text>Box 2</Text>
  </Square>
  <Box flex="1" bg="error.500">
    <Text>Box 3</Text>
  </Box>
</Flex>
`,
    },
  },
}
