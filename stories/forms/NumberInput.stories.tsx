import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputProps,
} from "../../src"

export default {
  component: NumberInput,
  title: "Forms/NumberInput",
} as Meta

const UsageTemplate: Story<NumberInputProps> = (args) => (
  <NumberInput {...args}>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
)

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<NumberInput>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>
`,
    },
  },
}
