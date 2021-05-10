import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { Link } from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Link,
  title: "Navigation/Link",
} as Meta

export const Usage = () => {
  const { t } = useTranslation()

  return <Link>{t("navigation_link")}</Link>
}
