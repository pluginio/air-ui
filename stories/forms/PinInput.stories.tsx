import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { PinInput, PinInputField , HStack} from '../../src'

export default {
  component: PinInput,
  title: 'Forms/PinInput'
} as Meta

export const Usage = (args) => (
  <HStack>
    <PinInput>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  </HStack>
)
