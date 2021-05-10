import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '../../src'

export default {
  component: NumberInput,
  title: 'Forms/NumberInput'
} as Meta

export const Usage = (args) => (
  <NumberInput>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
)
