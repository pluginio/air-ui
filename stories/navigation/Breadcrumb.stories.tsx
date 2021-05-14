import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbProps,
} from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Breadcrumb,
  title: "Navigation/Breadcrumb",
} as Meta

const UsageTemplate: Story<BreadcrumbProps> = (args) => {
  const { t } = useTranslation()

  return (
    <Breadcrumb {...args}>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          {t("navigation_breadcrumb_home")}
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          {t("navigation_breadcrumb_docs")}
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">
          {t("navigation_breadcrumb_breadcrumb")}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href="#">
      Home
    </BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href="#">
      Docs
    </BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href="#">
      Breadcrumb
    </BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
`,
    },
  },
}

const SeparatorsTemplate: Story<BreadcrumbProps> = (args) => {
  const { t } = useTranslation()

  return (
    <Breadcrumb separator="-">
      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          {t("navigation_breadcrumb_home")}
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          {t("navigation_breadcrumb_about")}
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">
          {t("navigation_breadcrumb_contact")}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export const Separators = SeparatorsTemplate.bind({})
Separators.args = {}
Separators.parameters = {
  docs: {
    source: {
      code: `
<Breadcrumb separator="-">
  <BreadcrumbItem>
    <BreadcrumbLink href="#">
      Home
    </BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href="#">
      About
    </BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href="#">
      Contact
    </BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
`,
    },
  },
}
