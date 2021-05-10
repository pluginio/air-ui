import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import {
  Flex,
  Image,
  Heading,
  Text,
  Button,
  useColorMode,
  Icon,
  Tab,
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
  useTheme
} from "../../src"
import { MdApps } from "react-icons/md"
import { IoGameControllerOutline } from "react-icons/io5"
import { IoMdFilm } from "react-icons/io"
import { BiSearch, BiBookBookmark, BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { AppCard } from "./AppCard.stories"
import { useTranslation } from 'react-i18next'

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
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

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
      <Image
        w="full"
        src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/banner_example.jpg?fbclid=IwAR0ZqTsSC1klaoEJTi3PIoqJpxAdmmvB6Eadm9frm6AehGjZURLsfkJffGo"
        borderRadius="10px"
        mb="4"
      />
      <InputGroup justifyContent="center" alignItems="center" mb="4">
        <InputLeftElement w="48px" h="48px">
          <Icon aria-label={t("app_store_search")} as={BiSearch} w="1.2rem" h="1.2rem" />
        </InputLeftElement>
        <Input size="lg" type="text" placeholder={t("app_store_search")} />
        <InputRightElement w="48px" h="48px">
          <IconButton
            aria-label={t("app_store_search")}
            icon={theme.direction === "ltr" ? <BiChevronRight /> : <BiChevronLeft />}
            fontSize="20px"
            w="48px"
            h="48px"
            bgColor="primary.200"
            onClick={handleSearch}
          />
        </InputRightElement>
      </InputGroup>
      <Tabs isFitted variant="unstyled">
        <TabList
          bgColor={isDark ? "#22272C" : "gray.200"}
          borderRadius="10px"
          h="90px"
          justifyContent="space-between"
          mb="4"
        >
          <Tab
            display="flex"
            p="2"
            maxW="90px"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            borderRadius="10px"
            color="primary.200"
            _selected={{ color: "white", bg: "primary.200" }}
          >
            <Icon as={MdApps} fontSize="2rem" />
            <Text fontSize="sm">{t("app_store_apps")}</Text>
          </Tab>
          <Tab
            display="flex"
            p="2"
            maxW="90px"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            borderRadius="10px"
            color="primary.200"
            _selected={{ color: "white", bg: "primary.200" }}
          >
            <Icon as={IoGameControllerOutline} fontSize="2rem" />
            <Text fontSize="sm">{t("app_store_games")}</Text>
          </Tab>
          <Tab
            display="flex"
            p="2"
            maxW="90px"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            borderRadius="10px"
            color="primary.200"
            _selected={{ color: "white", bg: "primary.200" }}
          >
            <Icon as={IoMdFilm} fontSize="2rem" />
            <Text fontSize="sm">{t("app_store_movies_tv")}</Text>
          </Tab>
          <Tab
            display="flex"
            p="2"
            maxW="90px"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            borderRadius="10px"
            color="primary.200"
            _selected={{ color: "white", bg: "primary.200" }}
          >
            <Icon as={BiBookBookmark} fontSize="2rem" />
            <Text fontSize="sm">{t("app_store_books")}</Text>
          </Tab>
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
