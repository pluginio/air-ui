import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { Text, TextProps } from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Text,
  title: "Typography/Text",
} as Meta

export const Usage = (args: TextProps) => {
  const { t } = useTranslation()

  return <Text {...args}>{t("typography_text")}</Text>
}
