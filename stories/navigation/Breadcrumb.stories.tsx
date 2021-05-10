import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Breadcrumb,
  title: "Navigation/Breadcrumb",
} as Meta

export const Usage = () => {
  const { t } = useTranslation()

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          {t("form_textarea_placeholder")}
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

export const Separators = () => {
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
