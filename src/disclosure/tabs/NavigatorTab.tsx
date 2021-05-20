import React from "react"
import { Text } from "../../typography/text"
import { Icon } from "../../media-icons/icon"
import { Tab } from "."

export interface NavigatorTabProps {
  icon: any
  text: string
}

export const NavigatorTab: React.FC<NavigatorTabProps> = ({ icon, text }) => {
  return (
    <Tab
      display="flex"
      p="0"
      maxW="100px"
      w="full"
      h="full"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="10px"
      color="primary.200"
      _selected={{ color: "white", bg: "primary.200" }}
    >
      <Icon as={icon} fontSize="2rem" />
      <Text fontSize="sm">{text}</Text>
    </Tab>
  )
}
