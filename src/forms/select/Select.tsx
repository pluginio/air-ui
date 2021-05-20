import React from "react"
import {
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
  useTheme,
  Icon,
} from "@chakra-ui/react"
import { BiChevronDown } from "react-icons/bi"

export interface SelectProps extends ChakraSelectProps {}

export const Select: React.FC<SelectProps> = ({ children, ...rest }) => {
  const theme = useTheme()

  return (
    <ChakraSelect
      {...rest}
      size="lg"
      icon={
        <Icon
          sx={{ width: "48px !important", height: "48px !important", color: "white !important" }}
          borderRadius="6px"
          padding="11.5px"
          bg="primary.500"
          as={BiChevronDown}
        />
      }
    >
      {children}
    </ChakraSelect>
  )
}
