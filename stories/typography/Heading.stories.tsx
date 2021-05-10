import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { Heading, HeadingProps } from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Heading,
  title: "Typography/Heading",
} as Meta

export const Usage = (args: HeadingProps) => {
  const { t } = useTranslation()

  return (
    <Heading {...args}>
      {t("typography_heading")}
    </Heading>
  )
}
