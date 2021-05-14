import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Wrap, WrapItem, Center, WrapProps } from "../../src"

export default {
  component: Wrap,
  title: "Layout/Wrap",
} as Meta

const UsageTemplate: Story<WrapProps> = (args) => (
  <Wrap {...args}>
    <WrapItem>
      <Center w="180px" h="80px" bg="error.500">
        Box 1
      </Center>
    </WrapItem>
    <WrapItem>
      <Center w="180px" h="80px" bg="success.500">
        Box 2
      </Center>
    </WrapItem>
    <WrapItem>
      <Center w="180px" h="80px" bg="warning.500">
        Box 3
      </Center>
    </WrapItem>
    <WrapItem>
      <Center w="180px" h="80px" bg="info.500">
        Box 4
      </Center>
    </WrapItem>
  </Wrap>
)
export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Wrap>
  <WrapItem>
    <Center w="180px" h="80px" bg="error.500">
      Box 1
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w="180px" h="80px" bg="success.500">
      Box 2
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w="180px" h="80px" bg="warning.500">
      Box 3
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w="180px" h="80px" bg="info.500">
      Box 4
    </Center>
  </WrapItem>
</Wrap>
`,
    },
  },
}
