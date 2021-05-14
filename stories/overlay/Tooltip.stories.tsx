import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Tooltip } from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Tooltip,
  title: "Overlay/Tooltip",
} as Meta

const UsageTemplate: Story = () => {
  const { t } = useTranslation()

  return (
    <Tooltip label={t("overlay_tooltip_tooltip")} aria-label="A tooltip">
      {t("overlay_tooltip_text")}
    </Tooltip>
  )
}
export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Tooltip label="Hey, I'm here!" aria-label="A tooltip">
  Hover me
</Tooltip>
`,
    },
  },
}
