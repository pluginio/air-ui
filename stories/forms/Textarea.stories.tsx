import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { Textarea } from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Textarea,
  title: "Forms/Textarea",
} as Meta

export const Usage = (args) => {
  const { t } = useTranslation()

  return <Textarea placeholder={t("form_textarea_placeholder")} />
}
