import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Heading, HeadingProps } from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Heading,
  title: "Typography/Heading",
} as Meta

const UsageTemplate: Story<HeadingProps> = (args) => {
  const { t } = useTranslation()

  return <Heading {...args}>{t("typography_heading")}</Heading>
}

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Heading>Heading</Heading>
`,
    },
  },
}
