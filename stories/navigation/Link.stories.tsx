import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Link, LinkProps } from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Link,
  title: "Navigation/Link",
} as Meta

const UsageTemplate: Story<LinkProps> = (args) => {
  const { t } = useTranslation()

  return <Link {...args}>{t("navigation_link")}</Link>
}

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Link>default link</Link>
`,
    },
  },
}
