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
} from "../../src"
import { MdStar, MdPlayArrow, MdFavorite, MdMoreVert } from "react-icons/md"
import { IoHeartOutline } from "react-icons/io5"
import { BiChat, BiTrophy } from "react-icons/bi"

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
              Cut the Rope: Magic
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
            ZetoLab UK Limited
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
          <Button variant="pill" size="xs" fontSize="sm" me="4" mb="1">
            OPEN
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

const AppActions = () => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  return (
    <Flex
      bgColor={isDark ? "#22272C" : "gray.200"}
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
          icon={<IoHeartOutline size="1.5rem" />}
          mb="1"
        />
        <Text fontSize="sm">Favorite</Text>
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
        <Text fontSize="sm">Invite</Text>
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
        <Text fontSize="sm">Rank</Text>
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
        <Text fontSize="sm">More</Text>
      </Flex>
    </Flex>
  )
}

const Screenshots = () => {
  const Screenshot = (props: { src: string }) => {
    return (
      <Image w="200px" src={props.src} borderRadius="10px" objectFit="fill" />
    )
  }

  return (
    <Box marginX={{ base: "-8px", md: "0" }}>
      <Carousel paddingLeft="8px" paddingRight="8px">
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
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  const [aboutShow, setAboutShow] = React.useState(false)
  const handleAboutToggle = () => setAboutShow(!aboutShow)

  return (
    <Flex
      flexDir="column"
      bgColor={isDark ? "#22272C" : "gray.200"}
      borderRadius="10px"
      px="4"
      pt="4"
      pb="2"
      mb="10"
      mt="4"
    >
      <Collapse startingHeight={100} in={aboutShow}>
        <Heading as="h4" fontSize="xl" fontWeight="normal">
          About this game
        </Heading>
        <Text fontSize="sm" whiteSpace="pre-line" textColor={isDark ? "gray.400" : "gray.600"}>
          {`
              ABRACADABRA! After more than 960 million downloads, the Cut the Rope series returns with a magical new sequel: Cut the Rope: Magic!
    
              Join Om Nom’s newest adventure and transform him into magical forms to help the lovable little monster recover candy stolen by an evil wizard!
      
              EXCITING NEW FEATURES
              - A magical world with completely new graphics, sound and gameplay elements
              - 6 ways to transform Om Nom into magical creatures along his journey
              - Complex boss levels that will challenge your candy-crunching, rope-cutting skills
              - 160+ all-new puzzles, with more coming soon!
          
              A magical mishap has accidentally teleported Om Nom to a mystical world filled with challenging puzzles for players of all ages. Can you use Om Nom’s new skills to solve an evil wizard’s tricks and traps? The latest installment of this globally popular entertainment franchise puts a fresh spin on Cut the Rope’s iconic physics-puzzle gameplay, introducing more than 160 all-new magic-themed levels across a richly imagined, colorful world.

              MAGICALLY TRANSFORM OM NOM INTO NEW FORMS
              - The Bird Form helps Om Nom fly up above obstacles and potential traps
              - The Baby Form allows Om Nom to squeeze into small, restricted spaces
              - The Fish Form can help Om Nom dive deep to snatch up all the delicious candy
              - The Mouse Form gives Om Nom a heightened sense of smell to help him sniff out the sweets he craves
              - The Spirit Form ensures that nothing gets in Om Nom’s way during his magical journey
              - The Dragon Form summons a powerful sneeze that sends everything flying

              THAT’S NOT ALL -- Additional levels and transformations coming soon!
            `}
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
        {aboutShow ? "Less" : "More"}
      </Button>
    </Flex>
  )
}

const RateApp = () => {
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center" mb="10">
      <RatingBar value={90} />
      <Button variant="link" fontSize="sm" fontWeight="normal">
        Rate this game
      </Button>
    </Flex>
  )
}

const WhatsNew = () => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  const [whatsNewShow, setWhatsNewShow] = React.useState(false)
  const handleWhatsNewToggle = () => setWhatsNewShow(!whatsNewShow)

  return (
    <Flex
      flexDir="column"
      bgColor={isDark ? "#22272C" : "gray.200"}
      borderRadius="10px"
      px="4"
      pt="4"
      pb="2"
      mb="6"
    >
      <Collapse startingHeight={95} in={whatsNewShow}>
        <Heading as="h4" fontSize="xl" fontWeight="normal">
          What's new?
        </Heading>
        <Text fontSize="sm" whiteSpace="pre-line" textColor={isDark ? "gray.400" : "gray.600"}>
          {`
              1. new feature 1
              2. new feature 2
              3. new feature 3
              4. bug fix 1
              5. bug fix 2
              6. bug fix 3
            `}
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
        {whatsNewShow ? "Less" : "More"}
      </Button>
    </Flex>
  )
}

const MoreApps = () => {
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
          More by ZetoLab UK Limited
        </Heading>
        <Box marginX="-8px">
          <Carousel paddingLeft="8px" paddingRight="8px">
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
          See all
        </Button>
      </Flex>

      <Flex flexDir="column">
        <Heading as="h4" fontSize="xl" ms="2" mb="4" fontWeight="normal">
          You may also like
        </Heading>
        <Box marginX="-8px">
          <Carousel paddingLeft="8px" paddingRight="8px">
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
          See all
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
              mr="-14px"
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
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  return (
    <Flex
      flexDir="column"
      bgColor={isDark ? "#22272C" : "gray.200"}
      borderRadius="10px"
      px="4"
      pt="4"
      pb="2"
    >
      <Heading as="h4" fontSize="xl" mb="4" fontWeight="normal">
        Ratings and reviews
      </Heading>
      <Flex mb="6">
        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex flexDir="column" alignItems="center">
            <Text fontSize="4xl" lineHeight="none">
              4.5
            </Text>
            <Text
              fontSize="lg"
              fontWeight="medium"
              lineHeight="none"
              mt="0.5"
              mb="2.5"
            >
              out of 5
            </Text>
          </Flex>
          <Text fontSize="sm" textColor={isDark ? "gray.400" : "gray.600"}>470,302 ratings</Text>
        </Flex>
        <RatingChart data={[315102, 79951, 32921, 9406, 32921]} />
      </Flex>

      <Review
        profileImage="https://avatars.githubusercontent.com/u/1716106"
        timeStamp="4 mins ago"
        rating={100}
        username="@gary"
        review="This is my favorite game. I keep coming back to it time and time again and this is why I'm rating it 5 stars."
      />

      <Review
        profileImage="https://avatars.githubusercontent.com/u/23258994"
        timeStamp="2 weeks ago"
        rating={100}
        username="@jack"
        review="This game is amazing! Addictive fun. Beautiful graphics. Simple gameplay. Would recommend."
      />

      <Button
        variant="link"
        fontSize="sm"
        alignSelf="flex-end"
        p="2"
        fontWeight="normal"
      >
        See all
      </Button>
    </Flex>
  )
}

const AppInfo = () => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === "dark"

  return (
    <Flex flexDir="column">
      <Flex flexWrap="wrap" mb="4" p="2">
        <Flex flexDir="column" mt="10" w="150px">
          <Heading fontSize="lg" as="h5" mb="3">
            Developer
          </Heading>
          <Text fontSize="sm" whiteSpace="pre-line" mb="4" textColor={isDark ? "gray.400" : "gray.600"}>
            {`ZeptoLab UK
            Limited2 Eaton Gate
            London
            SW1W 9BJ
            United Kingdom`}
          </Text>
        </Flex>

        <Flex flexDir="column" mt="10" w="150px">
          <Heading fontSize="lg" as="h5" mb="3">
            Links
          </Heading>

          <Link fontSize="sm" py="1">
            Visit website
          </Link>

          <Link fontSize="sm" py="1">
            support@zeptolab.com
          </Link>

          <Link fontSize="sm" py="1">
            Privacy policy
          </Link>
        </Flex>

        <Flex flexDir="column" mt="10" w="150px">
          <Heading fontSize="lg" as="h5" mb="3">
            Content rating
          </Heading>

          <Image
            w="72px"
            h="89px"
            src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/pegi_3.png"
          />

          <Link fontSize="sm" py="1">
            Learn more
          </Link>
        </Flex>

        <Flex flexDir="column" mt="10" w="150px">
          <Heading fontSize="lg" as="h5" mb="3">
            Digital items
          </Heading>
          <Text fontSize="sm" textColor={isDark ? "gray.400" : "gray.600"}>£0.74 - £78.49 per item</Text>
        </Flex>

        <Flex flexDir="column" mt="10" w="150px">
          <Heading fontSize="lg" as="h5" mb="3">
            Updated
          </Heading>
          <Text fontSize="sm" textColor={isDark ? "gray.400" : "gray.600"}>November 3, 2020</Text>
        </Flex>
      </Flex>

      <Link colorScheme="warning" fontSize="sm" alignSelf="flex-end" p="2">
        Report this application
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
