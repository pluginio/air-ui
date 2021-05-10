import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Flex, Center, Square, Box, Text } from '../../src'

export default {
  component: Flex,
  title: 'Layout/Flex'
} as Meta

export const Usage = () => (
  <Flex color='white'>
    <Center w='100px' bg='green.500'>
      <Text>Box 1</Text>
    </Center>
    <Square bg='blue.500' size='150px'>
      <Text>Box 2</Text>
    </Square>
    <Box flex='1' bg='tomato'>
      <Text>Box 3</Text>
    </Box>
  </Flex>
)
