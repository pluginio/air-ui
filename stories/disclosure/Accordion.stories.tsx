import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionProps,
  Box,
  Heading,
} from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Accordion,
  title: "Disclosure/Accordion",
} as Meta

const UsageTemplate: Story<AccordionProps> = (args) => {
  const { t } = useTranslation()

  return (
    <Accordion>
      <AccordionItem>
        <Heading as="h2">
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {t("disclosure_accordion_section_one_title")}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <Heading as="h2">
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {t("disclosure_accordion_section_two_title")}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Accordion>
  <AccordionItem>
    <Heading as="h2">
      <AccordionButton>
        <Box flex="1" textAlign="left">
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </Heading>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <Heading as="h2">
      <AccordionButton>
        <Box flex="1" textAlign="left">
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </Heading>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
`,
    },
  },
}

const ExpandMultipleItemsAtOnceTemplate: Story<AccordionProps> = (args) => {
  const { t } = useTranslation()

  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <Heading as="h2">
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {t("disclosure_accordion_section_one_title")}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <Heading as="h2">
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {t("disclosure_accordion_section_two_title")}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export const ExpandMultipleItemsAtOnce = ExpandMultipleItemsAtOnceTemplate.bind(
  {},
)
ExpandMultipleItemsAtOnce.args = {}
ExpandMultipleItemsAtOnce.parameters = {
  docs: {
    source: {
      code: `
<Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <Heading as="h2">
      <AccordionButton>
        <Box flex="1" textAlign="left">
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </Heading>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <Heading as="h2">
      <AccordionButton>
        <Box flex="1" textAlign="left">
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </Heading>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
`,
    },
  },
}

const ToggleEachAccordionItemTemplate: Story<AccordionProps> = (args) => {
  const { t } = useTranslation()

  return (
    <Accordion allowToggle>
      <AccordionItem>
        <Heading as="h2">
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {t("disclosure_accordion_section_one_title")}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <Heading as="h2">
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {t("disclosure_accordion_section_two_title")}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export const ToggleEachAccordionItem = ToggleEachAccordionItemTemplate.bind({})
ToggleEachAccordionItem.args = {}
ToggleEachAccordionItem.parameters = {
  docs: {
    source: {
      code: `
<Accordion allowToggle>
  <AccordionItem>
    <Heading as="h2">
      <AccordionButton>
        <Box flex="1" textAlign="left">
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </Heading>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <Heading as="h2">
      <AccordionButton>
        <Box flex="1" textAlign="left">
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </Heading>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
`,
    },
  },
}
