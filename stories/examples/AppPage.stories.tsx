import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import {
  Flex,
  Image,
  Heading,
  Text,
  Button,
  useColorMode,
  Box,
  AspectRatio,
  Link,
  Icon,
  IconButton,
  Collapse,
  RatingBar,
  RatingChart,
  Avatar,
  Carousel,
  CarouselSlide,
  useBreakpointValue,
} from "../../src"
import { MdStar, MdPlayArrow, MdFavorite, MdMoreVert } from "react-icons/md"
import { BiChat, BiTrophy, BiHeart } from "react-icons/bi"
import { useTranslation } from "react-i18next"

export const AppPage = () => (
  <Box p="2" maxW="740px" m="auto">
    <Header />
    <AppOverview />
    <AppActions />
    <Screenshots />
    <AboutApp />
    <RateApp />
    <WhatsNew />
    <MoreApps />
    <RatingsAndReviews />
    <AppInfo />
  </Box>
)

const Header = () => {
  return (
    <AspectRatio ratio={19 / 9} minH="200px" mb="4">
      <Image
        src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/banner_example.jpg"
        borderRadius="10px"
        objectFit="cover"
      />
    </AspectRatio>
  )
}

const AppOverview = () => {
  const { t } = useTranslation()

  return (
    <Flex lineHeight="none" h="114px" mb="4" w="full">
      <Image
        width="114px"
        height="114px"
        src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/cut_the_rope_magic_icon.webp"
        alt="cut the rope magic"
        borderRadius="22px"
        objectFit="cover"
      />
      <Flex
        flexDir="column"
        ps="4"
        justifyContent="space-between"
        overflow="hidden"
      >
        <Flex flexDir="column">
          <Flex>
            <Heading
              isTruncated
              as="h6"
              fontSize="xl"
              fontWeight="normal"
              me="2"
            >
              {t("app_page_overview_title")}
            </Heading>
            <Image
              width="20px"
              height="24px"
              src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/pegi_3.png"
              alt="pegi rating"
              objectFit="cover"
            />
          </Flex>
          <Link noOfLines={1} fontSize="md" pt="1" pb="2">
            {t("app_page_overview_publisher")}
          </Link>
          <Flex>
            <Flex alignItems="center" me="5">
              <Icon as={MdStar} me="1" />
              <Text fontSize="sm">4.2</Text>
            </Flex>
            <Flex alignItems="center" me="5">
              <Icon as={MdPlayArrow} me="1" />
              <Text fontSize="sm">1.6k</Text>
            </Flex>
            <Flex alignItems="center">
              <Icon as={MdFavorite} me="1" />
              <Text fontSize="sm">522</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Button variant="pill" size="xs" fontSize="sm" me="4" mb="1" px="5">
            {t("app_page_overview_button_open")}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

const AppActions = () => {
  const { t } = useTranslation()
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  return (
    <Flex
      bgColor={isDark ? "#22272C" : "gray.100"}
      borderRadius="10px"
      h="100px"
      justifyContent="space-evenly"
      alignItems="center"
      mb="4"
    >
      <Flex flexDir="column" alignItems="center">
        <IconButton
          w="48px"
          h="48px"
          variant="outline"
          colorScheme="primary"
          isRound
          aria-label="favorite"
          icon={<BiHeart size="1.5rem" />}
          mb="1"
        />
        <Text fontSize="sm">{t("app_page_actions_favorite")}</Text>
      </Flex>

      <Flex flexDir="column" alignItems="center">
        <IconButton
          w="48px"
          h="48px"
          variant="outline"
          colorScheme="primary"
          isRound
          aria-label="invite"
          icon={<BiChat size="1.5rem" />}
          mb="1"
        />
        <Text fontSize="sm">{t("app_page_actions_invite")}</Text>
      </Flex>

      <Flex flexDir="column" alignItems="center">
        <IconButton
          w="48px"
          h="48px"
          variant="outline"
          colorScheme="primary"
          isRound
          aria-label="rank"
          icon={<BiTrophy size="1.5rem" />}
          mb="1"
        />
        <Text fontSize="sm">{t("app_page_actions_rank")}</Text>
      </Flex>

      <Flex flexDir="column" alignItems="center">
        <IconButton
          w="48px"
          h="48px"
          variant="outline"
          colorScheme="primary"
          isRound
          aria-label="more"
          icon={<MdMoreVert size="1.5rem" />}
          mb="1"
        />
        <Text fontSize="sm">{t("app_page_actions_more")}</Text>
      </Flex>
    </Flex>
  )
}

const Screenshots = () => {
  const carouselPaddding = useBreakpointValue({ base: "8px", md: "0px" })

  const Screenshot = (props: { src: string }) => {
    return (
      <Image w="200px" src={props.src} borderRadius="10px" objectFit="fill" />
    )
  }

  return (
    <Box marginX={{ base: "-8px", md: "0" }}>
      <Carousel spaceBetween={16} paddingLeft={carouselPaddding} paddingRight={carouselPaddding}>
        <CarouselSlide style={{ width: "auto" }}>
          <Screenshot src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/app_screenshot_1.webp" />
        </CarouselSlide>

        <CarouselSlide style={{ width: "auto" }}>
          <Screenshot src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/app_screenshot_2.webp" />
        </CarouselSlide>

        <CarouselSlide style={{ width: "auto" }}>
          <Screenshot src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/app_screenshot_3.webp" />
        </CarouselSlide>

        <CarouselSlide style={{ width: "auto" }}>
          <Screenshot src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/app_screenshot_4.webp" />
        </CarouselSlide>

        <CarouselSlide style={{ width: "auto" }}>
          <Screenshot src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/app_screenshot_1.webp" />
        </CarouselSlide>

        <CarouselSlide style={{ width: "auto" }}>
          <Screenshot src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/app_screenshot_2.webp" />
        </CarouselSlide>

        <CarouselSlide style={{ width: "auto" }}>
          <Screenshot src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/app_screenshot_3.webp" />
        </CarouselSlide>

        <CarouselSlide style={{ width: "auto" }}>
          <Screenshot src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/app_screenshot_4.webp" />
        </CarouselSlide>
      </Carousel>
    </Box>
  )
}

const AboutApp = () => {
  const { t } = useTranslation()
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  const [aboutShow, setAboutShow] = React.useState(false)
  const handleAboutToggle = () => setAboutShow(!aboutShow)

  return (
    <Flex
      flexDir="column"
      bgColor={isDark ? "#22272C" : "gray.100"}
      borderRadius="10px"
      px="4"
      pt="4"
      pb="2"
      mb="10"
      mt="4"
    >
      <Collapse startingHeight={95} in={aboutShow}>
        <Heading as="h4" fontSize="xl" fontWeight="normal">
          {t("app_page_about_title")}
        </Heading>
        <Text
          fontSize="sm"
          whiteSpace="pre-line"
          textColor={isDark ? "gray.400" : "gray.600"}
        >
          {t("app_page_about_description")}
        </Text>
      </Collapse>
      <Button
        variant="link"
        onClick={handleAboutToggle}
        fontSize="sm"
        alignSelf="flex-end"
        p="2"
        me="-8px"
        mb="-4px"
        fontWeight="normal"
      >
        {aboutShow ? t("app_page_about_less") : t("app_page_about_more")}
      </Button>
    </Flex>
  )
}

const RateApp = () => {
  const { t } = useTranslation()

  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center" mb="10">
      <RatingBar value={90} />
      <Button variant="link" fontSize="sm" fontWeight="normal">
        {t("app_page_rate_app")}
      </Button>
    </Flex>
  )
}

const WhatsNew = () => {
  const { t } = useTranslation()
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  const [whatsNewShow, setWhatsNewShow] = React.useState(false)
  const handleWhatsNewToggle = () => setWhatsNewShow(!whatsNewShow)

  return (
    <Flex
      flexDir="column"
      bgColor={isDark ? "#22272C" : "gray.100"}
      borderRadius="10px"
      px="4"
      pt="4"
      pb="2"
      mb="6"
    >
      <Collapse startingHeight={95} in={whatsNewShow}>
        <Heading as="h4" fontSize="xl" fontWeight="normal">
          {t("app_page_whats_new_title")}
        </Heading>
        <Text
          fontSize="sm"
          whiteSpace="pre-line"
          textColor={isDark ? "gray.400" : "gray.600"}
        >
          {t("app_page_whats_new_description")}
        </Text>
      </Collapse>
      <Button
        variant="link"
        onClick={handleWhatsNewToggle}
        fontSize="sm"
        alignSelf="flex-end"
        p="2"
        me="-8px"
        mb="-4px"
        fontWeight="normal"
      >
        {whatsNewShow ? t("app_page_whats_new_less") : t("app_page_whats_new_more")}
      </Button>
    </Flex>
  )
}

const MoreApps = () => {
  const { t } = useTranslation()
  const carouselPaddding = useBreakpointValue({ base: "8px", md: "0px" })

  const AppItem = (props: { src: string }) => {
    return (
      <Image
        w="114px"
        h="114px"
        src={props.src}
        borderRadius="10px"
        objectFit="fill"
      />
    )
  }

  return (
    <Flex flexDir="column" my="10">
      <Flex flexDir="column" mb="8">
        <Heading as="h4" fontSize="xl" ms="2" mb="4" fontWeight="normal">
          {t("app_page_more_apps_publisher")}
        </Heading>
        <Box marginX={{ base: "-8px", md: "0" }}>
          <Carousel
            spaceBetween={16}
            paddingLeft={carouselPaddding}
            paddingRight={carouselPaddding}
          >
            <CarouselSlide style={{ width: "auto" }}>
              <AppItem src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/cut_the_rope_icon.webp" />
            </CarouselSlide>

            <CarouselSlide style={{ width: "auto" }}>
              <AppItem src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/cut_the_rope_2_icon.webp" />
            </CarouselSlide>

            <CarouselSlide style={{ width: "auto" }}>
              <AppItem src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/king_of_thieves_icon.webp" />
            </CarouselSlide>

            <CarouselSlide style={{ width: "auto" }}>
              <AppItem src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/om_nom_run_icon.webp" />
            </CarouselSlide>

            <CarouselSlide style={{ width: "auto" }}>
              <AppItem src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/cut_the_rope_icon.webp" />
            </CarouselSlide>

            <CarouselSlide style={{ width: "auto" }}>
              <AppItem src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/cut_the_rope_2_icon.webp" />
            </CarouselSlide>

            <CarouselSlide style={{ width: "auto" }}>
              <AppItem src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/king_of_thieves_icon.webp" />
            </CarouselSlide>

            <CarouselSlide style={{ width: "auto" }}>
              <AppItem src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/om_nom_run_icon.webp" />
            </CarouselSlide>
          </Carousel>
        </Box>
        <Button
          variant="link"
          fontSize="sm"
          alignSelf="flex-end"
          mt="1"
          p="2"
          fontWeight="normal"
        >
          {t("app_page_more_apps_see_all")}
        </Button>
      </Flex>

      <Flex flexDir="column">
        <Heading as="h4" fontSize="xl" ms="2" mb="4" fontWeight="normal">
          {t("app_page_more_apps_may_also_like")}
        </Heading>
        <Box marginX={{ base: "-8px", md: "0" }}>
          <Carousel
            spaceBetween={16}
            paddingLeft={carouselPaddding}
            paddingRight={carouselPaddding}
          >
            <CarouselSlide style={{ width: "auto" }}>
              <AppItem src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/om_nom_run_icon.webp" />
            </CarouselSlide>

            <CarouselSlide style={{ width: "auto" }}>
              <AppItem src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/king_of_thieves_icon.webp" />
            </CarouselSlide>

            <CarouselSlide style={{ width: "auto" }}>
              <AppItem src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/cut_the_rope_2_icon.webp" />
            </CarouselSlide>

            <CarouselSlide style={{ width: "auto" }}>
              <AppItem src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/cut_the_rope_icon.webp" />
            </CarouselSlide>

            <CarouselSlide style={{ width: "auto" }}>
              <AppItem src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/om_nom_run_icon.webp" />
            </CarouselSlide>

            <CarouselSlide style={{ width: "auto" }}>
              <AppItem src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/king_of_thieves_icon.webp" />
            </CarouselSlide>

            <CarouselSlide style={{ width: "auto" }}>
              <AppItem src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/cut_the_rope_2_icon.webp" />
            </CarouselSlide>

            <CarouselSlide style={{ width: "auto" }}>
              <AppItem src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/cut_the_rope_icon.webp" />
            </CarouselSlide>
          </Carousel>
        </Box>
        <Button
          variant="link"
          fontSize="sm"
          alignSelf="flex-end"
          mt="1"
          p="2"
          fontWeight="normal"
        >
          {t("app_page_more_apps_see_all")}
        </Button>
      </Flex>
    </Flex>
  )
}

interface ReviewProps {
  profileImage: string
  timeStamp: string
  username: string
  rating: number
  review: string
}

const Review: React.FC<ReviewProps> = ({
  profileImage,
  timeStamp,
  username,
  rating,
  review,
}) => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  return (
    <Flex mb="2">
      <Avatar src={profileImage} alt="" mt="4" />
      <Flex flexDir="column" ms="4" w="full">
        <Flex justifyContent="space-between" alignItems="center" mb="3">
          <Flex flexDir="column">
            <RatingBar size="sm" pt="17px" value={rating} />
            <Text fontSize="md" lineHeight="1">
              {username}
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Text fontSize="sm" me="2">
              {timeStamp}
            </Text>
            <IconButton
              variant="ghost"
              colorScheme="primary"
              isRound
              aria-label="options"
              icon={<MdMoreVert size="1.5rem" />}
              me="-14px"
            />
          </Flex>
        </Flex>
        <Text fontSize="sm" textColor={isDark ? "gray.400" : "gray.600"}>
          {review}
        </Text>
      </Flex>
    </Flex>
  )
}

const RatingsAndReviews = () => {
  const { t } = useTranslation()
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  return (
    <Flex
      flexDir="column"
      bgColor={isDark ? "#22272C" : "gray.100"}
      borderRadius="10px"
      px="4"
      pt="4"
      pb="2"
    >
      <Heading as="h4" fontSize="xl" mb="4" fontWeight="normal">
        {t("app_page_ratings_reviews_title")}
      </Heading>
      <Flex mb="6">
        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="space-between"
          minW="94px"
        >
          <Flex flexDir="column" alignItems="center">
            <Text fontSize="4xl" lineHeight="none">
              {t("app_page_ratings_reviews_rating")}
            </Text>
            <Text
              fontSize="lg"
              fontWeight="medium"
              lineHeight="none"
              mt="0.5"
              mb="2.5"
            >
              {t("app_page_ratings_reviews_out_of_five")}
            </Text>
          </Flex>
          <Text fontSize="sm" textColor={isDark ? "gray.400" : "gray.600"} textAlign="center">
            {t("app_page_ratings_reviews_total_ratings")}
          </Text>
        </Flex>
        <RatingChart data={[315102, 79951, 32921, 9406, 32921]} />
      </Flex>

      <Review
        profileImage="https://avatars.githubusercontent.com/u/1716106"
        timeStamp={t("app_page_review_timestamp_1")}
        rating={100}
        username="@gary"
        review="This is my favorite game. I keep coming back to it time and time again and this is why I'm rating it 5 stars."
      />

      <Review
        profileImage="https://avatars.githubusercontent.com/u/23258994"
        timeStamp={t("app_page_review_timestamp_2")}
        rating={100}
        username="@jack"
        review="This game is amazing! Addictive fun. Beautiful graphics. Simple gameplay. Would recommend."
      />

      <Button
        variant="link"
        fontSize="sm"
        alignSelf="flex-end"
        p="2"
        me="-8px"
        mb="-4px"
        fontWeight="normal"
      >
        {t("app_page_ratings_reviews_see_all")}
      </Button>
    </Flex>
  )
}

const AppInfo = () => {
  const { t } = useTranslation()
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  return (
    <Flex flexDir="column">
      <Flex flexWrap="wrap" mb="4" p="2">
        <Flex flexDir="column" mt="10" w="150px">
          <Heading fontSize="lg" as="h5" mb="3">
            {t("app_page_info_developer")}
          </Heading>
          <Text
            fontSize="sm"
            whiteSpace="pre-line"
            mb="4"
            textColor={isDark ? "gray.400" : "gray.600"}
          >
            {`ZeptoLab
            2 Eaton Gate
            London
            SW1W 9BJ
            United Kingdom`}
          </Text>
        </Flex>

        <Flex flexDir="column" mt="10" w="150px">
          <Heading fontSize="lg" as="h5" mb="2">
            {t("app_page_info_links")}
          </Heading>

          <Link fontSize="sm" py="1">
          {t("app_page_info_links_visit_website")}
          </Link>

          <Link fontSize="sm" py="1">
            support@zeptolab.com
          </Link>

          <Link fontSize="sm" py="1">
            {t("app_page_info_links_privacy_policy")}
          </Link>
        </Flex>

        <Flex flexDir="column" mt="10" w="150px">
          <Heading fontSize="lg" as="h5" mb="3">
            {t("app_page_info_content_rating")}
          </Heading>

          <Image
            w="60px"
            src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/pegi_3.png"
          />

          <Link fontSize="sm" py="1">
            {t("app_page_info_content_rating_learn_more")}
          </Link>
        </Flex>

        <Flex flexDir="column" mt="10" w="150px">
          <Heading fontSize="lg" as="h5" mb="3">
            {t("app_page_info_digital_items")}
          </Heading>
          <Text fontSize="sm" textColor={isDark ? "gray.400" : "gray.600"}>
            {t("app_page_info_digital_items_description")}
          </Text>
        </Flex>

        <Flex flexDir="column" mt="10" w="150px">
          <Heading fontSize="lg" as="h5" mb="3">
            {t("app_page_info_updated")}
          </Heading>
          <Text fontSize="sm" textColor={isDark ? "gray.400" : "gray.600"}>
            {t("app_page_info_updated_date")}
          </Text>
        </Flex>
      </Flex>

      <Link colorScheme="warning" fontSize="sm" alignSelf="flex-end" p="2">
        {t("app_page_info_report_app")}
      </Link>
    </Flex>
  )
}

export default {
  component: Box,
  title: "0.Examples/AppPage",
  subcomponents: {
    Header,
    AppOverview,
    AppActions,
    Screenshots,
    AboutApp,
    RateApp,
    WhatsNew,
    RatingsAndReviews,
    AppInfo,
  },
  parameters: {
    layout: "fullscreen",
  },
} as Meta
