import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  InputProps,
} from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Input,
  title: "Forms/Input",
} as Meta

const UsageTemplate: Story<InputProps> = (args) => {
  const { t } = useTranslation()

  return <Input placeholder={t("form_input_usage_placeholder")} {...args} />
}

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Input placeholder="basic usage" />
`,
    },
  },
}

const PasswordInputTemplate: Story<InputProps> = (args) => {
  const { t } = useTranslation()
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size="md">
      <Input
        pe="4.5rem"
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

export const PasswordInput = PasswordInputTemplate.bind({})
PasswordInput.args = {}
PasswordInput.parameters = {
  docs: {
    source: {
      code: `
const PasswordInput = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size="md">
      <Input
        pe="4.5rem"
        type={show ? "text" : "password"}
        placeholder="enter password"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}
`,
    },
  },
}
