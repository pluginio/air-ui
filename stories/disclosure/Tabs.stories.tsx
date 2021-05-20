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
  NavigatorTab,
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

  return (
    <Tabs {...args}>
      <TabList>
        <NavigatorTab icon={MdApps} text={t("disclosure_tabs_apps")} />
        <NavigatorTab icon={IoGameControllerOutline} text={t("disclosure_tabs_games")}/>
        <NavigatorTab icon={IoMdFilm} text={t("disclosure_tabs_movie_tv")} />
        <NavigatorTab icon={BiBookBookmark} text={t("disclosure_tabs_books")} />
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
<Tabs>
  <TabList>
    <NavigatorTab icon={MdApps} text="Apps"/>
    <NavigatorTab icon={IoGameControllerOutline} text="Games"/>
    <NavigatorTab icon={IoMdFilm} text="Movies & TV"/>
    <NavigatorTab icon={BiBookBookmark} text="Books"/>
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
