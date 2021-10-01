import { TextProps, useColorMode } from "@chakra-ui/react"
import React from "react"
import { Text } from "../../../typography/text"

export interface FormLabelCounterProps extends TextProps {
  count?: number | string,
  maxCount?: number | string
}

export const FormLabelCounter: React.FC<FormLabelCounterProps> = ({ count, maxCount, ...rest }) => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  
  return (
    <Text {...rest} fontSize="sm" textColor={isDark ? "label.500" : "black"}>{count} / {maxCount}</Text>
  )
}
