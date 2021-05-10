import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Stack, Box } from '../../src'

export default {
  component: Stack,
  title: 'Layout/Stack'
} as Meta

export const Usage = () => (
  <Stack direction={['column', 'row']} spacing='24px'>
    <Box w='40px' h='40px' bg='yellow.200'>
      1
    </Box>
    <Box w='40px' h='40px' bg='tomato'>
      2
    </Box>
    <Box w='40px' h='40px' bg='pink.100'>
      3
    </Box>
  </Stack>
)
