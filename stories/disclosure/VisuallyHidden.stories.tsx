import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Button, VisuallyHidden } from "../../src"
import { BiCheck } from "react-icons/bi"

export default {
  component: VisuallyHidden,
  title: "Disclosure/VisuallyHidden",
} as Meta

const UsageTemplate: Story = () => (
  <Button>
    <VisuallyHidden>Checkmark</VisuallyHidden>
    <BiCheck />
  </Button>
)

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Button>
  <VisuallyHidden>Checkmark</VisuallyHidden>
  <BiCheck />
</Button>
`,
    },
  },
}
