import React from 'react'
import { Select as ChakraSelect, SelectProps as ChakraSelectProps, useTheme } from "@chakra-ui/react"
import { Icon } from '../../media-icons/icon'
import { Flex } from '../../layout/flex' 
import { BiChevronDown } from 'react-icons/bi'

export interface SelectProps extends ChakraSelectProps {}

export const Select: React.FC<SelectProps> = ({children, ...rest}) => {
  const theme = useTheme()

  return (
    <Flex position="relative">
      <ChakraSelect {...rest} size="lg">
        {children}
      </ChakraSelect>
      <Icon w="48px" h="full" aria-label="select" p="3" as={BiChevronDown} borderRadius="6px" bg="primary.200" color="white" position="absolute" left={theme.direction === "ltr" ? "unset" : "0"}  right={theme.direction === "ltr" ? "0" : "unset"} pointerEvents="none" />
    </Flex>
  )
}
