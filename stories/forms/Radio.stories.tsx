import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Radio, RadioGroup, Stack, RadioGroupProps } from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Radio,
  title: "Forms/Radio",
} as Meta

const UsageTemplate: Story<RadioGroupProps> = (args) => {
  const { t } = useTranslation()
  const [value, setValue] = React.useState("1")

  return (
    <RadioGroup onChange={setValue} value={value} {...args}>
      <Stack direction="row">
        <Radio value="1">{t("form_radio_option_1")}</Radio>
        <Radio value="2">{t("form_radio_option_2")}</Radio>
        <Radio value="3">{t("form_radio_option_3")}</Radio>
      </Stack>
    </RadioGroup>
  )
}

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
const RadioExample = () => {
  const [value, setValue] = React.useState("1")

  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
      </Stack>
    </RadioGroup>
  )
}
`,
    },
  },
}
