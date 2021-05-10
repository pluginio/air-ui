import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Grid, GridItem } from '../../src'

export default {
  component: Grid,
  title: 'Layout/Grid'
} as Meta

export const Usage = () => (
  <Grid h='200px' templateRows='repeat(2, 1fr)' templateColumns='repeat(5, 1fr)' gap={4}>
    <GridItem rowSpan={2} colSpan={1} bg='tomato' />
    <GridItem colSpan={2} bg='papayawhip' />
    <GridItem colSpan={2} bg='papayawhip' />
    <GridItem colSpan={4} bg='tomato' />
  </Grid>
)
