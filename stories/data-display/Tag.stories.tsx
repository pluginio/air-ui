import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Tag, TagProps, Stack, TagLabel, IconButton } from "../../src"
import { MdClose } from "react-icons/md"
import { useTranslation } from "react-i18next"

export default {
  component: Tag,
  title: "Data Display/Tag",
} as Meta

const UsageTemplate: Story<TagProps> = (args) => {
  const { t } = useTranslation()

  return (
    <Stack direction="row">
      <Tag
        size="sm"
        borderRadius="full"
        variant="subtle"
        colorScheme="primary"
        p="0"
      >
        <TagLabel
          flex="1"
          ps="4"
          pe="3"
          color="white"
          textTransform="uppercase"
        >
          {t("data_display_tag_blouse")}
        </TagLabel>
        <IconButton
          minW="unset"
          w="26px"
          h="26px"
          p="0.5"
          aria-label="remove"
          icon={<MdClose />}
          bg="primary.200"
          borderRadius="full"
        />
      </Tag>

      <Tag
        size="sm"
        borderRadius="full"
        variant="subtle"
        colorScheme="primary"
        p="0"
      >
        <TagLabel
          flex="1"
          ps="4"
          pe="3"
          color="white"
          textTransform="uppercase"
        >
          {t("data_display_tag_skirt")}
        </TagLabel>
        <IconButton
          minW="unset"
          w="26px"
          h="26px"
          p="0.5"
          aria-label="remove"
          icon={<MdClose />}
          bg="primary.200"
          borderRadius="full"
        />
      </Tag>

      <Tag
        size="sm"
        borderRadius="full"
        variant="subtle"
        colorScheme="primary"
        p="0"
      >
        <TagLabel
          flex="1"
          ps="4"
          pe="3"
          color="white"
          textTransform="uppercase"
        >
          {t("data_display_tag_trousers")}
        </TagLabel>
        <IconButton
          minW="unset"
          w="26px"
          h="26px"
          p="0.5"
          aria-label="remove"
          icon={<MdClose />}
          bg="primary.200"
          borderRadius="full"
        />
      </Tag>
    </Stack>
  )
}

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Stack direction="row">
  <Tag
    size="sm"
    borderRadius="full"
    variant="subtle"
    colorScheme="primary"
    p="0"
  >
    <TagLabel
      flex="1"
      ps="4"
      pe="3"
      color="white"
      textTransform="uppercase"
    >
      {t("data_display_tag_blouse")}
    </TagLabel>
    <IconButton
      minW="unset"
      w="26px"
      h="26px"
      p="0.5"
      aria-label="remove"
      icon={<MdClose />}
      bg="primary.200"
      borderRadius="full"
    />
  </Tag>

  <Tag
    size="sm"
    borderRadius="full"
    variant="subtle"
    colorScheme="primary"
    p="0"
  >
    <TagLabel
      flex="1"
      ps="4"
      pe="3"
      color="white"
      textTransform="uppercase"
    >
      {t("data_display_tag_skirt")}
    </TagLabel>
    <IconButton
      minW="unset"
      w="26px"
      h="26px"
      p="0.5"
      aria-label="remove"
      icon={<MdClose />}
      bg="primary.200"
      borderRadius="full"
    />
  </Tag>

  <Tag
    size="sm"
    borderRadius="full"
    variant="subtle"
    colorScheme="primary"
    p="0"
  >
    <TagLabel
      flex="1"
      ps="4"
      pe="3"
      color="white"
      textTransform="uppercase"
    >
      {t("data_display_tag_trousers")}
    </TagLabel>
    <IconButton
      minW="unset"
      w="26px"
      h="26px"
      p="0.5"
      aria-label="remove"
      icon={<MdClose />}
      bg="primary.200"
      borderRadius="full"
    />
  </Tag>
</Stack>
`,
    },
  },
}
