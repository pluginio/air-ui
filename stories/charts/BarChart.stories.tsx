import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { BarChart, BarChartProps } from '../../src'

export default {
  component: BarChart,
  title: 'Charts/BarChart'
} as Meta

const Template: Story<BarChartProps> = (args) => <BarChart {...args} />

export const Usage = Template.bind({})
Usage.args = {
  name: "Revenue",
  categories: ['Mar 10', 'Mar 11', 'Mar 12', 'Mar 13', 'Mar 14', 'Mar 15', 'Mar 16', 'Mar 17'],
  data: [1000, 1900, 2400, 1100, 3100, 4200, 3000, 1200]
} as BarChartProps
