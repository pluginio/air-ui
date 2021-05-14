import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Icon,
  Flex,
  Text,
  AspectRatio,
  useColorMode,
  TabsProps,
} from "../../src"
import { MdApps } from "react-icons/md"
import { IoGameControllerOutline } from "react-icons/io5"
import { IoMdFilm } from "react-icons/io"
import { BiBookBookmark } from "react-icons/bi"
import { useTranslation } from "react-i18next"

export default {
  component: Tabs,
  subcomponents: { TabList, Tab },
  title: "Disclosure/Tabs",
} as Meta

const UsageTemplate: Story<TabsProps> = (args) => {
  const { t } = useTranslation()
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  return (
    <Tabs isFitted variant="unstyled" {...args}>
      <TabList
        bgColor={isDark ? "#22272C" : "gray.200"}
        borderRadius="10px"
        h="100px"
        justifyContent="space-between"
      >
        <Tab
          display="flex"
          p="0"
          maxW="100px"
          w="full"
          h="full"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          borderRadius="10px"
          color="primary.200"
          _selected={{ color: "white", bg: "primary.200" }}
        >
          <Icon as={MdApps} fontSize="2rem" />
          <Text>{t("disclosure_tabs_apps")}</Text>
        </Tab>
        <Tab
          display="flex"
          p="0"
          maxW="100px"
          w="full"
          h="full"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          borderRadius="10px"
          color="primary.200"
          _selected={{ color: "white", bg: "primary.200" }}
        >
          <Icon as={IoGameControllerOutline} fontSize="2rem" />
          <Text>{t("disclosure_tabs_games")}</Text>
        </Tab>
        <Tab
          display="flex"
          p="0"
          maxW="100px"
          w="full"
          h="full"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          borderRadius="10px"
          color="primary.200"
          _selected={{ color: "white", bg: "primary.200" }}
        >
          <Icon as={IoMdFilm} fontSize="2rem" />
          <Text>{t("disclosure_tabs_movie_tv")}</Text>
        </Tab>
        <Tab
          display="flex"
          p="0"
          maxW="100px"
          w="full"
          h="full"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          borderRadius="10px"
          color="primary.200"
          _selected={{ color: "white", bg: "primary.200" }}
        >
          <Icon as={BiBookBookmark} fontSize="2rem" />
          <Text>{t("disclosure_tabs_books")}</Text>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Text>{t("disclosure_tabs_apps")}</Text>
        </TabPanel>
        <TabPanel>
          <Text>{t("disclosure_tabs_games")}</Text>
        </TabPanel>
        <TabPanel>
          <Text>{t("disclosure_tabs_movie_tv")}</Text>
        </TabPanel>
        <TabPanel>
          <Text>{t("disclosure_tabs_books")}</Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Tabs isFitted variant="unstyled">
  <TabList
    bgColor={isDark ? "#22272C" : "gray.200"}
    borderRadius="10px"
    h="100px"
    justifyContent="space-between"
  >
    <Tab
      display="flex"
      p="0"
      maxW="100px"
      w="full"
      h="full"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="10px"
      color="primary.200"
      _selected={{ color: "white", bg: "primary.200" }}
    >
      <Icon as={MdApps} fontSize="2rem" />
      <Text>Apps</Text>
    </Tab>
    <Tab
      display="flex"
      p="0"
      maxW="100px"
      w="full"
      h="full"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="10px"
      color="primary.200"
      _selected={{ color: "white", bg: "primary.200" }}
    >
      <Icon as={IoGameControllerOutline} fontSize="2rem" />
      <Text>Games</Text>
    </Tab>
    <Tab
      display="flex"
      p="0"
      maxW="100px"
      w="full"
      h="full"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="10px"
      color="primary.200"
      _selected={{ color: "white", bg: "primary.200" }}
    >
      <Icon as={IoMdFilm} fontSize="2rem" />
      <Text>Movies & TV</Text>
    </Tab>
    <Tab
      display="flex"
      p="0"
      maxW="100px"
      w="full"
      h="full"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="10px"
      color="primary.200"
      _selected={{ color: "white", bg: "primary.200" }}
    >
      <Icon as={BiBookBookmark} fontSize="2rem" />
      <Text>Books</Text>
    </Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <Text>Apps</Text>
    </TabPanel>
    <TabPanel>
      <Text>Games</Text>
    </TabPanel>
    <TabPanel>
      <Text>Movies & TV</Text>
    </TabPanel>
    <TabPanel>
      <Text>Books</Text>
    </TabPanel>
  </TabPanels>
</Tabs>
`,
    },
  },
}
