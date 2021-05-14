import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Button,
} from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Popover,
  title: "Overlay/Popover",
} as Meta

const UsageTemplate: Story = () => {
  const { t } = useTranslation()

  return (
    <Popover>
      <PopoverTrigger>
        <Button>{t("overlay_popover_button")}</Button>
      </PopoverTrigger>
      <PopoverContent ms="2">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>{t("overlay_popover_title")}</PopoverHeader>
        <PopoverBody>{t("overlay_popover_description")}</PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Popover>
  <PopoverTrigger>
    <Button>Trigger</Button>
  </PopoverTrigger>
  <PopoverContent ms="2">
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody>Are you sure you want to place this order?</PopoverBody>
  </PopoverContent>
</Popover>
`,
    },
  },
}
