import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Code, CodeProps, Stack } from "../../src"

export default {
  component: Code,
  title: "Data Display/Code",
} as Meta

const UsageTemplate: Story<CodeProps> = (args) => <Code {...args} />

export const Usage = UsageTemplate.bind({})
Usage.args = {
  colorScheme: "blue",
  children: "Hello world",
} as CodeProps
Usage.parameters = {
  docs: {
    source: {
      code: `
<Code colorScheme="blue">
  Hello world
</Code>
`,
    },
  },
}

const ColorsTemplate: Story = () => (
  <Stack direction="row">
    <Code>console.log(welcome)</Code>
    <Code colorScheme="red">let air = 'awesome!'</Code>
    <Code colorScheme="yellow">npm install air-ui</Code>
  </Stack>
)

export const Colors = ColorsTemplate.bind({})
Colors.parameters = {
  docs: {
    source: {
      code: `
<Stack direction="row">
  <Code>console.log(welcome)</Code>
  <Code colorScheme="red">let air = 'awesome!'</Code>
  <Code colorScheme="yellow">npm install air-ui</Code>
</Stack>
`,
    },
  },
}
