import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Textarea, TextareaProps } from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Textarea,
  title: "Forms/Textarea",
} as Meta

const UsageTemplate: Story<TextareaProps> = (args) => {
  const { t } = useTranslation()

  return <Textarea placeholder={t("form_textarea_placeholder")} />
}

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Textarea placeholder="basic usage" />
`,
    },
  },
}
