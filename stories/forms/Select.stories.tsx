import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Select, SelectProps } from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Select,
  title: "Forms/Select",
} as Meta

const UsageTemplate: Story<SelectProps> = (args) => {
  const { t } = useTranslation()

  return (
    <Select placeholder={t("form_select_placeholder")} size="lg" {...args}>
      <option value="option1">{t("form_select_option_one")}</option>
      <option value="option2">{t("form_select_option_two")}</option>
      <option value="option3">{t("form_select_option_three")}</option>
    </Select>
  )
}

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Select placeholder="Select option" size="lg">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</Select>
`,
    },
  },
}
