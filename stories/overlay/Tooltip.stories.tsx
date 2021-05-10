import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { Tooltip } from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Tooltip,
  title: "Overlay/Tooltip",
} as Meta

export const Usage = (args) => {
  const { t } = useTranslation()

  return (
    <Tooltip label={t("overlay_tooltip_tooltip")} aria-label="A tooltip">
      {t("overlay_tooltip_text")}
    </Tooltip>
  )
}
