import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import {
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Icon,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Carousel,
  CarouselSlide,
  Box,
  useTheme,
  NavigatorTab,
  AspectRatio,
} from "../../src"
import { Usage as Search } from "../forms/Search.stories"
import { MdApps } from "react-icons/md"
import { IoGameControllerOutline } from "react-icons/io5"
import { IoMdFilm } from "react-icons/io"
import {
  BiSearch,
  BiBookBookmark,
  BiChevronLeft,
  BiChevronRight,
} from "react-icons/bi"
import { AppCard } from "./AppCard.stories"
import { useTranslation } from "react-i18next"

export default {
  component: Flex,
  subcomponents: { Image, Heading, Text, Button },
  title: "0.Examples/AppStore",
  parameters: {
    layout: "fullscreen",
  },
} as Meta

export const Usage = () => {
  const { t } = useTranslation()
  const theme = useTheme()

  const handleSearch = () => {
    console.log("Handle search")
  }

  const renderSlides = () => {
    const elements = []

    for (let index = 0; index < 8; index++) {
      elements.push(
        <CarouselSlide key={index} style={{ width: "auto" }}>
          <AppCard />
          <AppCard />
        </CarouselSlide>,
      )
    }

    return elements
  }

  return (
    <Box p="2" maxW="740px" m="auto">
      <AspectRatio ratio={19 / 9} minH="180px" mb="4">
        <Image src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/banner_example.jpg?fbclid=IwAR0ZqTsSC1klaoEJTi3PIoqJpxAdmmvB6Eadm9frm6AehGjZURLsfkJffGo" borderRadius="10px" objectFit="cover" />
      </AspectRatio>

      <Search />

      <Tabs>
        <TabList mb="4">
          <NavigatorTab icon={MdApps} text={t("app_store_apps")} />
          <NavigatorTab
            icon={IoGameControllerOutline}
            text={t("app_store_games")}
          />
          <NavigatorTab icon={IoMdFilm} text={t("app_store_movies_tv")} />
          <NavigatorTab icon={BiBookBookmark} text={t("app_store_books")} />
        </TabList>

        <Select placeholder={t("app_store_select_category")} size="lg">
          <option value="action">{t("app_store_action")}</option>
          <option value="adventure">{t("app_store_adventure")}</option>
          <option value="casual">{t("app_store_casual")}</option>
        </Select>

        <TabPanels>
          <TabPanel p="0">
            <Heading as="h4" fontSize="xl" mt="8" mb="4" fontWeight="medium">
              {t("app_store_action")}
            </Heading>
            <Carousel>{renderSlides()}</Carousel>

            <Heading as="h4" fontSize="xl" mt="8" mb="4" fontWeight="medium">
              {t("app_store_adventure")}
            </Heading>
            <Carousel>{renderSlides()}</Carousel>

            <Heading as="h4" fontSize="xl" mt="8" mb="4" fontWeight="medium">
              {t("app_store_casual")}
            </Heading>
            <Carousel>{renderSlides()}</Carousel>

            <Heading as="h4" fontSize="xl" mt="8" mb="4" fontWeight="medium">
              {t("app_store_top_rated")}
            </Heading>
            <Carousel>{renderSlides()}</Carousel>
          </TabPanel>

          <TabPanel p="0">
            <Text mt="8">{t("app_store_games")}</Text>
          </TabPanel>

          <TabPanel p="0">
            <Text mt="8">{t("app_store_movies_tv")}</Text>
          </TabPanel>

          <TabPanel p="0">
            <Text mt="8">{t("app_store_books")}</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
