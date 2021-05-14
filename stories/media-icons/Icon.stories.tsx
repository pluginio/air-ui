import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Icon, IconProps } from "../../src"
import { MdSettings } from "react-icons/md"

export default {
  component: Icon,
  title: "Media & Icons/Icon",
} as Meta

const UsageTemplate: Story = (args) => <Icon {...args} />

export const Usage = UsageTemplate.bind({})
Usage.args = {
  as: MdSettings,
}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Icon as={MdSettings} />
`,
    },
  },
}
