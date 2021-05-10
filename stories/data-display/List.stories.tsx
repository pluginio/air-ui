import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { List, ListProps, ListIcon, ListItem, OrderedList as AirOrderedList, UnorderedList as AirUnorderedList } from '../../src'

export default {
  component: List,
  title: 'Data Display/List'
} as Meta

export const UnorderedList = (args: ListProps) => (
  <AirUnorderedList {...args}> 
     <ListItem>Lorem ipsum dolor sit amet</ListItem>
    <ListItem>Consectetur adipiscing elit</ListItem>
    <ListItem>Integer molestie lorem at massa</ListItem>
    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
  </AirUnorderedList>
)

export const OrderedList = (args: ListProps) => (
  <AirOrderedList {...args}> 
     <ListItem>Lorem ipsum dolor sit amet</ListItem>
    <ListItem>Consectetur adipiscing elit</ListItem>
    <ListItem>Integer molestie lorem at massa</ListItem>
    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
  </AirOrderedList>
)

export const UnstyledListWithIcon = () => (
  <List spacing={3}>
  <ListItem>
    <ListIcon color="green.500" />
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
  </ListItem>
  <ListItem>
    <ListIcon color="green.500" />
    Assumenda, quia temporibus eveniet a libero incidunt suscipit
  </ListItem>
  <ListItem>
    <ListIcon color="green.500" />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </ListItem>
  <ListItem>
    <ListIcon color="green.500"  />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </ListItem>
</List>
)
