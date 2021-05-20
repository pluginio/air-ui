import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Tag, TagProps, TagCloseButton, TagLabel, Flex } from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Tag,
  subcomponents: { TagLabel, TagCloseButton },
  title: "Data Display/Tag",
} as Meta

const UsageTemplate: Story<TagProps> = (args) => {
  const { t } = useTranslation()

  return (
    <Flex wrap="wrap">
      <Tag>
        <TagLabel>{t("data_display_tag_blouse")}</TagLabel>
        <TagCloseButton />
      </Tag>

      <Tag>
        <TagLabel>{t("data_display_tag_skirt")}</TagLabel>
        <TagCloseButton />
      </Tag>

      <Tag>
        <TagLabel>{t("data_display_tag_trousers")}</TagLabel>
        <TagCloseButton />
      </Tag>
    </Flex>
  )
}

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Flex wrap="wrap">
  <Tag>
    <TagLabel>{t("data_display_tag_blouse")}</TagLabel>
    <TagCloseButton/>
  </Tag>

  <Tag>
    <TagLabel>{t("data_display_tag_skirt")}</TagLabel>
    <TagCloseButton/>
  </Tag>

  <Tag>
    <TagLabel>{t("data_display_tag_trousers")}</TagLabel>
    <TagCloseButton/>
  </Tag>
</Flex>
`,
    },
  },
}
