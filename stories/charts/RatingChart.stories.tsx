import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { RatingChart, RatingChartProps } from '../../src'

export default {
  component: RatingChart,
  title: 'Charts/RatingChart'
} as Meta

const Template: Story<RatingChartProps> = (args) => <RatingChart {...args} />

export const Usage = Template.bind({})
Usage.args = {
  name: "Rating",
  data: [315102, 79951, 32921, 9406, 32921]
} as RatingChartProps
