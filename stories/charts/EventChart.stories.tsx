import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { EventChart, EventChartProps } from "../../src"

export default {
  component: EventChart,
  title: "Charts/EventChart",
} as Meta

const Template: Story<EventChartProps> = (args) => <EventChart {...args} />

const options: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
}

export const Usage = Template.bind({})
Usage.args = {
  name: "Current price",
  data: [
    {
      name: new Date(1622726799467).toLocaleDateString("en-US", options),
      data: 38983.81,
    },
    {
      name: new Date(1622729210538).toLocaleDateString("en-US", options),
      data: 38632.52,
    },
    {
      name: new Date(1622732633824).toLocaleDateString("en-US", options),
      data: 38679.34,
    },
    {
      name: new Date(1622737480137).toLocaleDateString("en-US", options),
      data: 38808.85,
    },
    {
      name: new Date(1622739746116).toLocaleDateString("en-US", options),
      data: 38985.79,
    },
    {
      name: new Date(1622744154345).toLocaleDateString("en-US", options),
      data: 39004.02,
    },
    {
      name: new Date(1622747256121).toLocaleDateString("en-US", options),
      data: 38572.11,
    },
    {
      name: new Date(1622751363840).toLocaleDateString("en-US", options),
      data: 38689.9,
    },
    {
      name: new Date(1622755425866).toLocaleDateString("en-US", options),
      data: 39007.68,
    },
    {
      name: new Date(1622756650000).toLocaleDateString("en-US", options),
      data: 38819.39,
    },
  ],
  color: "#00AEF9",
} as EventChartProps
