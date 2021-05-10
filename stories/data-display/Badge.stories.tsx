import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { Badge, BadgeProps, Stack } from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Badge,
  title: "Data Display/Badge",
} as Meta

export const Usage = (args: BadgeProps) => {
  const { t } = useTranslation()

  return (
    <Badge {...args} colorScheme="primary">
      {t("data_display_badge_default")}
    </Badge>
  )
}

export const BadgeColor = (args: BadgeProps) => {
  const { t } = useTranslation()

  return (
    <Stack direction="row">
      <Badge colorScheme="primary">{t("data_display_badge_default")}</Badge>
      <Badge colorScheme="success">{t("data_display_badge_success")}</Badge>
      <Badge colorScheme="error">{t("data_display_badge_removed")}</Badge>
      <Badge colorScheme="info">{t("data_display_badge_new")}</Badge>
    </Stack>
  )
}

export const BadgeVariants = (args: BadgeProps) => {
  const { t } = useTranslation()

  return (
    <Stack direction="row">
      <Badge variant="outline" colorScheme="primary">
        {t("data_display_badge_default")}
      </Badge>
      <Badge variant="solid" colorScheme="error">
        {t("data_display_badge_removed")}
      </Badge>
      <Badge variant="subtle" colorScheme="info">
        {t("data_display_badge_new")}
      </Badge>
    </Stack>
  )
}
