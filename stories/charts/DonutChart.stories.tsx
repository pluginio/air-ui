import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import { DonutChart, DonutChartProps } from '../../src'

export default {
  component: DonutChart,
  title: 'Charts/DonutChart'
} as Meta

const Template: Story<DonutChartProps> = (args) => <DonutChart {...args} />

export const Usage = Template.bind({})
Usage.args = {
  name: "Browser share",
  data: [
    {
      name: 'Chrome',
      y: 58.9
    },
    {
      name: 'Firefox',
      y: 13.29
    },
    {
      name: 'Internet Explorer',
      y: 13
    },
    {
      name: 'Edge',
      y: 3.78
    },
    {
      name: 'Safari',
      y: 3.42
    },
    {
      name: 'Other',
      y: 7.61,
    }
  ]
} as DonutChartProps
