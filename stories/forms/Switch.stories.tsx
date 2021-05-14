import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Switch, SwitchProps, FormControl, FormLabel } from "../../src"

export default {
  component: Switch,
  title: "Forms/Switch",
} as Meta

const UsageTemplate: Story<SwitchProps> = (args) => (
  <FormControl display="flex" alignItems="center">
    <FormLabel htmlFor="email-alerts" mb="0">
      Enable email alerts?
    </FormLabel>
    <Switch {...args} />
  </FormControl>
)

export const Usage = UsageTemplate.bind({})
Usage.args = {
  id: "email-alerts",
  colorScheme: "primary",
  ml: "2",
} as SwitchProps
Usage.parameters = {
  docs: {
    source: {
      code: `
<FormControl display="flex" alignItems="center">
  <FormLabel htmlFor="email-alerts" mb="0">
    Enable email alerts?
  </FormLabel>
  <Switch id="email-alerts"/>
</FormControl>
`,
    },
  },
}
