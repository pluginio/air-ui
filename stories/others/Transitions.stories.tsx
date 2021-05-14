import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import {
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Collapse,
  Button,
  useDisclosure,
  Box,
  FadeProps,
} from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Fade,
  title: "Others/Transitions",
} as Meta

const FadeTransitionTemplate: Story<FadeProps> = (args) => {
  const { t } = useTranslation()
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>{t("others_transitions_button")}</Button>
      <Fade in={isOpen} {...args}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="primary.500"
          rounded="md"
          shadow="md"
        >
          {t("others_transitions_fade")}
        </Box>
      </Fade>
    </>
  )
}
export const FadeTransition = FadeTransitionTemplate.bind({})
FadeTransition.args = {}
FadeTransition.parameters = {
  docs: {
    source: {
      code: `
const FadeTransition = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Fade in={isOpen}>
        <Box p='40px' color='white' mt='4' bg='primary.500' rounded='md' shadow='md'>
          Fade
        </Box>
      </Fade>
    </>
  )
}
`,
    },
  },
}

const ScaleFadeTransitionTemplate: Story<FadeProps> = (args) => {
  const { t } = useTranslation()
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>{t("others_transitions_button")}</Button>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="primary.500"
          rounded="md"
          shadow="md"
        >
          {t("others_transitions_scale_fade")}
        </Box>
      </ScaleFade>
    </>
  )
}
export const ScaleFadeTransition = ScaleFadeTransitionTemplate.bind({})
ScaleFadeTransition.args = {}
ScaleFadeTransition.parameters = {
  docs: {
    source: {
      code: `
const ScaleFadeTransition = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="primary.500"
          rounded="md"
          shadow="md"
        >
          Scale Fade
        </Box>
      </ScaleFade>
    </>
  )
}
`,
    },
  },
}

const SlideTransitionTemplate: Story<FadeProps> = (args) => {
  const { t } = useTranslation()
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>{t("others_transitions_button")}</Button>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="primary.500"
          rounded="md"
          shadow="md"
        >
          {t("others_transitions_slide")}
        </Box>
      </Slide>
    </>
  )
}
export const SlideTransition = SlideTransitionTemplate.bind({})
SlideTransition.args = {}
SlideTransition.parameters = {
  docs: {
    source: {
      code: `
const SlideTransition = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="primary.500"
          rounded="md"
          shadow="md"
        >
          Slide
        </Box>
      </Slide>
    </>
  )
}
`,
    },
  },
}

const SlideFadeTransitionTemplate: Story<FadeProps> = (args) => {
  const { t } = useTranslation()
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>{t("others_transitions_button")}</Button>
      <SlideFade in={isOpen} offsetY="20px">
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="primary.500"
          rounded="md"
          shadow="md"
        >
          {t("others_transitions_slide_fade")}
        </Box>
      </SlideFade>
    </>
  )
}
export const SlideFadeTransition = SlideFadeTransitionTemplate.bind({})
SlideFadeTransition.args = {}
SlideFadeTransition.parameters = {
  docs: {
    source: {
      code: `
const SlideFadeTransition = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <SlideFade in={isOpen} offsetY="20px">
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="primary.500"
          rounded="md"
          shadow="md"
        >
          Slide Fade
        </Box>
      </SlideFade>
    </>
  )
}
`,
    },
  },
}

const CollapseTransitionTemplate: Story<FadeProps> = (args) => {
  const { t } = useTranslation()
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>{t("others_transitions_button")}</Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="primary.500"
          rounded="md"
          shadow="md"
        >
          {t("others_transitions_collapse")}
        </Box>
      </Collapse>
    </>
  )
}
export const CollapseTransition = CollapseTransitionTemplate.bind({})
CollapseTransition.args = {}
CollapseTransition.parameters = {
  docs: {
    source: {
      code: `
const CollapseTransition = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="primary.500"
          rounded="md"
          shadow="md"
        >
          Collapse
        </Box>
      </Collapse>
    </>
  )
}
`,
    },
  },
}

const CollapseStartingHeightTransitionTemplate: Story<FadeProps> = (args) => {
  const { t } = useTranslation()
  const [show, setShow] = React.useState(false)

  const handleToggle = () => setShow(!show)

  return (
    <>
      <Collapse startingHeight={20} in={show}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis
        ullamcorper velit sed ullamcorper morbi tincidunt. Ut consequat semper
        viverra nam. Quis viverra nibh cras pulvinar mattis nunc. Lacus laoreet
        non curabitur gravida arcu ac tortor dignissim convallis.
      </Collapse>
      <Button size="sm" onClick={handleToggle} mt="1rem">
        {show
          ? t("others_transitions_collapse_show_less")
          : t("others_transitions_collapse_show_more")}
      </Button>
    </>
  )
}
export const CollapseStartingHeightTransition =
  CollapseStartingHeightTransitionTemplate.bind({})
CollapseStartingHeightTransition.args = {}
CollapseStartingHeightTransition.parameters = {
  docs: {
    source: {
      code: `
const CollapseStartingHeightTransition = () => {
  const [show, setShow] = React.useState(false)

  const handleToggle = () => setShow(!show)

  return (
    <>
      <Collapse startingHeight={20} in={show}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis
        ullamcorper velit sed ullamcorper morbi tincidunt. Ut consequat semper
        viverra nam. Quis viverra nibh cras pulvinar mattis nunc. Lacus laoreet
        non curabitur gravida arcu ac tortor dignissim convallis.
      </Collapse>
      <Button size="sm" onClick={handleToggle} mt="1rem">
        {show
          ? Show Less
          : Show More
      </Button>
    </>
  )
}
`,
    },
  },
}
