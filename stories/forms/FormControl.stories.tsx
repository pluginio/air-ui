import { Meta, Story } from "@storybook/react/types-6-0"
import React from "react"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  FormLabelContainer,
  FormLabelCounter,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Icon,
  FormControlProps,
} from "../../src"
import { BiError } from "react-icons/bi"
import { HiOutlineMail } from "react-icons/hi"
import { useTranslation } from "react-i18next"

export default {
  component: FormControl,
  title: "Forms/FormControl",
} as Meta

const FormControlInputWithHelperTextTemplate: Story<FormControlProps> = (args) => {
  const { t } = useTranslation()

  return (
    <FormControl id="email">
      <FormLabel>{t("forms_form_control_helper_text_label")}</FormLabel>
      <Input
        type="email"
        placeholder={t("forms_form_control_helper_text_placeholder")}
      />
      <FormHelperText>
        {t("forms_form_control_helper_text_helper")}
      </FormHelperText>
    </FormControl>
  )
}

export const FormControlInputWithHelperText = FormControlInputWithHelperTextTemplate.bind({})
FormControlInputWithHelperText.args = {}
FormControlInputWithHelperText.parameters = {
  docs: {
    source: {
      code: `
<FormControl id="email">
  <FormLabel>Email address</FormLabel>
  <Input type="email" placeholder="email address" />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
`,
    },
  },
}

const FormControlInputWithErrorTextTemplate: Story<FormControlProps> = (args) => {
  const { t } = useTranslation()
  const [value, setValue] = React.useState("")
  const handleChange = (event) => setValue(event.target.value)

  return (
    <FormControl id="email" isInvalid isRequired colorScheme="error" {...args}>
      <FormLabelContainer>
        <FormLabel>{t("forms_form_control_error_text_label")}</FormLabel>
        <FormLabelCounter count={value.length} maxCount={50} />
      </FormLabelContainer>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={HiOutlineMail} color="gray.300" />}
        />
        <Input
          type="email"
          placeholder={t("forms_form_control_error_text_placeholder")}
          onChange={handleChange}
          value={value}
          max={50}
        />
      </InputGroup>
      <FormErrorMessage display="flex">
        <Icon me="2" as={BiError} />
        {t("forms_form_control_error_text_error")}
      </FormErrorMessage>
    </FormControl>
  )
}

export const FormControlInputWithErrorText = FormControlInputWithErrorTextTemplate.bind({})
FormControlInputWithErrorText.args = {}
FormControlInputWithErrorText.parameters = {
  docs: {
    source: {
      code: `
<FormControl id="email" isInvalid isRequired colorScheme="error">
  <FormLabelContainer>
    <FormLabel>Email address</FormLabel>
    <FormLabelCounter count={value.length} maxCount={50} />
  </FormLabelContainer>
  <InputGroup>
    <InputLeftElement
      pointerEvents="none"
      children={<Icon as={HiOutlineMail} color="gray.300" />}
    />
    <Input
      type="email"
      placeholder="email address"
      onChange={handleChange}
      value={value}
      max={50}
    />
  </InputGroup>
  <FormErrorMessage display="flex">
    <Icon me="2" as={BiError} />
    Email does not exist
  </FormErrorMessage>
</FormControl>
`,
    },
  },
}

const FormControlTextareaWithErrorTextTemplate: Story<FormControlProps> = (args) => {
  const { t } = useTranslation()
  const [value, setValue] = React.useState("")
  const handleChange = (event) => setValue(event.target.value)

  return (
    <FormControl id="write-review" isInvalid {...args}>
      <FormLabelContainer>
        <FormLabel>
          {t("forms_form_control_textarea_error_text_label")}
        </FormLabel>
        <FormLabelCounter count={value.length} maxCount={200} />
      </FormLabelContainer>
      <Textarea
        type="text"
        placeholder={t("forms_form_control_textarea_error_text_placeholder")}
        onChange={handleChange}
        value={value}
        max={1}
        maxLength={200}
      />
      <FormErrorMessage display="flex">
        <Icon me="2" as={BiError} />
        {t("forms_form_control_textarea_error_text_error")}
      </FormErrorMessage>
    </FormControl>
  )
}

export const FormControlTextareaWithErrorText = FormControlTextareaWithErrorTextTemplate.bind({})
FormControlTextareaWithErrorText.args = {}
FormControlTextareaWithErrorText.parameters = {
  docs: {
    source: {
      code: `
<FormControl id="write-review" isInvalid>
  <FormLabelContainer>
    <FormLabel>Write a review</FormLabel>
    <FormLabelCounter count={value.length} maxCount={200} />
  </FormLabelContainer>
  <Textarea
    type="text"
    placeholder="Describe your experience"
    onChange={handleChange}
    value={value}
    max={1}
    maxLength={200}
  />
  <FormErrorMessage display="flex">
    <Icon me="2" as={BiError} />
    review too short
  </FormErrorMessage>
</FormControl>
`,
    },
  },
}
