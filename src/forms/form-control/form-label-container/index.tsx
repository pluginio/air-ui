import React from "react"
import { Flex } from "../../../layout/flex"

export interface FormLabelContainerProps {}

export const FormLabelContainer: React.FC<FormLabelContainerProps> = ({ children }) => {
  return (
    <Flex justifyContent="space-between">
      { children }
    </Flex>
  )
}
