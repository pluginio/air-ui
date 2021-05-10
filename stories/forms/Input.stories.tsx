import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Input,
  title: "Forms/Input",
} as Meta

export const Usage = () => {
  const { t } = useTranslation()

  return <Input placeholder={t("form_input_usage_placeholder")} />
}

export const PasswordInput = () => {
  const { t } = useTranslation()
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder={t("form_input_password_placeholder")}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}
