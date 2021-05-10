import { TextProps } from "@chakra-ui/react"
import React from "react"
import { Text } from "../../../typography/text"

export interface FormLabelCounterProps extends TextProps {
  count?: number | string,
  maxCount?: number | string
}

export const FormLabelCounter: React.FC<FormLabelCounterProps> = ({ count, maxCount, ...rest }) => {
  return (
    <Text {...rest} fontSize="md">{count}/{maxCount}</Text>
  )
}
