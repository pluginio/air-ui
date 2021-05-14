import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import {
  List,
  ListProps,
  ListIcon,
  ListItem,
  OrderedList as AirOrderedList,
  UnorderedList as AirUnorderedList,
} from "../../src"
import { MdCheckCircle, MdSettings } from "react-icons/md"

export default {
  component: List,
  title: "Data Display/List",
} as Meta

const UnorderedListTemplate: Story<ListProps> = (args) => (
  <AirUnorderedList {...args}>
    <ListItem>Lorem ipsum dolor sit amet</ListItem>
    <ListItem>Consectetur adipiscing elit</ListItem>
    <ListItem>Integer molestie lorem at massa</ListItem>
    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
  </AirUnorderedList>
)

export const UnorderedList = UnorderedListTemplate.bind({})
UnorderedList.args = {}
UnorderedList.parameters = {
  docs: {
    source: {
      code: `
<UnorderedList> 
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</UnorderedList>
`,
    },
  },
}

const OrderedListTemplate: Story<ListProps> = (args) => (
  <AirOrderedList {...args}>
    <ListItem>Lorem ipsum dolor sit amet</ListItem>
    <ListItem>Consectetur adipiscing elit</ListItem>
    <ListItem>Integer molestie lorem at massa</ListItem>
    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
  </AirOrderedList>
)

export const OrderedList = OrderedListTemplate.bind({})
OrderedList.args = {}
OrderedList.parameters = {
  docs: {
    source: {
      code: `
<OrderedList> 
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</OrderedList>
`,
    },
  },
}

const UnstyledListWithIconTemplate: Story<ListProps> = (args) => (
  <List spacing={3}>
    <ListItem>
      <ListIcon as={MdCheckCircle} color="primary.500" />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit
    </ListItem>
    <ListItem>
      <ListIcon as={MdCheckCircle} color="primary.500" />
      Assumenda, quia temporibus eveniet a libero incidunt suscipit
    </ListItem>
    <ListItem>
      <ListIcon as={MdCheckCircle} color="primary.500" />
      Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
    </ListItem>
    <ListItem>
      <ListIcon as={MdSettings} color="primary.500" />
      Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
    </ListItem>
  </List>
)

export const UnstyledListWithIcon = UnstyledListWithIconTemplate.bind({})
UnstyledListWithIcon.args = {}
UnstyledListWithIcon.parameters = {
  docs: {
    source: {
      code: `
<List spacing={3}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color="primary.500" />
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color="primary.500" />
    Assumenda, quia temporibus eveniet a libero incidunt suscipit
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color="primary.500" />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </ListItem>
  <ListItem>
    <ListIcon as={MdSettings} color="primary.500"  />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </ListItem>
</List>
  `,
    },
  },
}
