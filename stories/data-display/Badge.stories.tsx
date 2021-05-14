import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Badge, BadgeProps, Stack } from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Badge,
  title: "Data Display/Badge",
} as Meta

const UsageTemplate: Story<BadgeProps> = (args) => {
  const { t } = useTranslation()

  return (
    <Badge colorScheme="primary">
      {t("data_display_badge_default")}
    </Badge>
  )
}

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code:`
<Badge colorScheme="primary">
  default
</Badge>`,
    },
  },
}

const BadgeColorTemplate: Story<BadgeProps> = (args) => {
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

export const BadgeColor = BadgeColorTemplate.bind({})
BadgeColor.args = {
  
}
BadgeColor.parameters = {
  docs: {
    source: {
      code:`
<Stack direction="row">
  <Badge colorScheme="primary">default</Badge>
  <Badge colorScheme="success">success</Badge>
  <Badge colorScheme="error">removed</Badge>
  <Badge colorScheme="info">new</Badge>
</Stack>`,
    },
  },
}

const BadgeVariantsTemplate: Story<BadgeProps> = (args) => {
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

export const BadgeVariants = BadgeVariantsTemplate.bind({})
BadgeVariants.args = {
  
}
BadgeVariants.parameters = {
  docs: {
    source: {
      code:`
<Stack direction="row">
  <Badge variant="outline" colorScheme="primary">default</Badge>
  <Badge variant="solid" colorScheme="error">removed</Badge>
  <Badge variant="subtle" colorScheme="info">new</Badge>
</Stack>`,
    },
  },
}