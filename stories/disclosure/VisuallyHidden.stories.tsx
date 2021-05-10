import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Button, VisuallyHidden } from "../../src"
import { BiCheck } from "react-icons/bi"

export default {
  component: VisuallyHidden,
  title: "Disclosure/VisuallyHidden",
} as Meta

const Template: Story = (args) => (
  <Button>
    <VisuallyHidden>Checkmark</VisuallyHidden>
    <BiCheck />
  </Button>
)

export const Usage = Template.bind({})
Usage.args = {}
