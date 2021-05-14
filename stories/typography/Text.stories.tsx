import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Text, TextProps } from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Text,
  title: "Typography/Text",
} as Meta

const UsageTemplate: Story<TextProps> = (args) => {
  const { t } = useTranslation()

  return <Text {...args}>{t("typography_text")}</Text>
}

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Text>Text</Text>
`,
    },
  },
}
