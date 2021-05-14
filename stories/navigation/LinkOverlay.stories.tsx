import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import {
  LinkOverlay,
  LinkBox,
  Heading,
  Text,
  Box,
  LinkBoxProps,
} from "../../src"

export default {
  component: LinkOverlay,
  title: "Navigation/LinkOverlay",
} as Meta

const UsageTemplate: Story<LinkBoxProps> = (args) => (
  <LinkBox
    as="article"
    maxW="sm"
    p="5"
    borderWidth="1px"
    rounded="md"
    {...args}
  >
    <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
      13 days ago
    </Box>
    <Heading size="md" my="2">
      <LinkOverlay href="#">Lorem ipsum dolor sit amet</LinkOverlay>
    </Heading>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  </LinkBox>
)

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<LinkBox
  as="article"
  maxW="sm"
  p="5"
  borderWidth="1px"
  rounded="md"
>
  <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
    13 days ago
  </Box>
  <Heading size="md" my="2">
    <LinkOverlay href="#">Lorem ipsum dolor sit amet</LinkOverlay>
  </Heading>
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </Text>
</LinkBox>
`,
    },
  },
}
