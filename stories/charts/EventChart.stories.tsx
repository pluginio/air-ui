import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { EventChart, EventChartProps } from '../../src'

export default {
  component: EventChart,
  title: 'Charts/EventChart'
} as Meta

const Template: Story<EventChartProps> = (args) => <EventChart {...args} />

export const Usage = Template.bind({})
Usage.args = {
  name: "My event chart",
  data: [50, 60, 10, 70, 40, 80, 20, 30],
  color: '#00AEF9'
} as EventChartProps
