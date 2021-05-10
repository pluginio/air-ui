import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { SimpleGrid, Box } from '../../src'

export default {
  component: SimpleGrid,
  title: 'Layout/SimpleGrid'
} as Meta

export const Usage = () => (
  <SimpleGrid columns={2} spacing={10}>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
  </SimpleGrid>
)
