import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  Icon,
  useTheme,
  InputGroupProps,
} from "../../src"
import { BiSearch, BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { useTranslation } from "react-i18next"

export default {
  component: Input,
  title: "Forms/Search",
} as Meta

const UsageTemplate: Story<InputGroupProps> = (args) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const handleSearch = () => {
    console.log("Handle search")
  }

  return (
    <InputGroup justifyContent="center" alignItems="center" mb="4" {...args}>
      <InputLeftElement w="48px" h="48px">
        <Icon aria-label="search" as={BiSearch} w="1.2rem" h="1.2rem" />
      </InputLeftElement>
      <Input size="lg" type="text" placeholder={t("form_search_placeholder")} />
      <InputRightElement w="48px" h="48px">
        <IconButton
          aria-label="search"
          icon={
            theme.direction === "ltr" ? <BiChevronRight /> : <BiChevronLeft />
          }
          fontSize="20px"
          w="48px"
          h="48px"
          bgColor="primary.200"
          onClick={handleSearch}
        />
      </InputRightElement>
    </InputGroup>
  )
}

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
const SearchExample = () => {
  const theme = useTheme()

  const handleSearch = () => {
    console.log("Handle search")
  }

  return (
    <InputGroup justifyContent="center" alignItems="center" mb="4">
      <InputLeftElement w="48px" h="48px">
        <Icon aria-label="search" as={BiSearch} w="1.2rem" h="1.2rem" />
      </InputLeftElement>
      <Input size="lg" type="text" placeholder={t("form_search_placeholder")} />
      <InputRightElement w="48px" h="48px">
        <IconButton
          aria-label="search"
          icon={
            theme.direction === "ltr" ? <BiChevronRight /> : <BiChevronLeft />
          }
          fontSize="20px"
          w="48px"
          h="48px"
          bgColor="primary.200"
          onClick={handleSearch}
        />
      </InputRightElement>
    </InputGroup>
  )
}
`,
    },
  },
}
