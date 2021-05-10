import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Wrap, WrapItem, Center } from '../../src'

export default {
  component: Wrap,
  title: 'Layout/Wrap'
} as Meta

export const Usage = () => (
  <Wrap>
    <WrapItem>
      <Center w='180px' h='80px' bg='red.200'>
        Box 1
      </Center>
    </WrapItem>
    <WrapItem>
      <Center w='180px' h='80px' bg='green.200'>
        Box 2
      </Center>
    </WrapItem>
    <WrapItem>
      <Center w='180px' h='80px' bg='tomato'>
        Box 3
      </Center>
    </WrapItem>
    <WrapItem>
      <Center w='180px' h='80px' bg='blue.200'>
        Box 4
      </Center>
    </WrapItem>
  </Wrap>
)
