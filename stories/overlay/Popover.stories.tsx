import React from "react"
import { Meta } from "@storybook/react/types-6-0"
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

export const Usage = () => {
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
