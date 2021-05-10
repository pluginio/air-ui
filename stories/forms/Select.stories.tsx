import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { Select } from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Select,
  title: "Forms/Select",
} as Meta

export const Usage = (args) => {
  const { t } = useTranslation()

  return (
    <Select placeholder={t("form_select_placeholder")} size="lg">
      <option value="option1">{t("form_select_option_one")}</option>
      <option value="option2">{t("form_select_option_two")}</option>
      <option value="option3">{t("form_select_option_three")}</option>
    </Select>
  )
}
