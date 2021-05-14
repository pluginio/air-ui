import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { PinInput, PinInputField , HStack, PinInputProps} from '../../src'

export default {
  component: PinInput,
  title: 'Forms/PinInput'
} as Meta

const UsageTemplate: Story<PinInputProps> = (args) => (
  <HStack>
    <PinInput {...args}>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  </HStack>
)

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<HStack>
  <PinInput>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
`,
    },
  },
}