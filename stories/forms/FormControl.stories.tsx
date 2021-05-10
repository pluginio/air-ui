import { Meta } from "@storybook/react/types-6-0"
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
} from "../../src"
import { BiError } from "react-icons/bi"
import { HiOutlineMail } from "react-icons/hi"
import { useTranslation } from "react-i18next"

export default {
  component: FormControl,
  title: "Forms/FormControl",
} as Meta

export const FormControlInputWithHelperText = (args) => {
  const { t } = useTranslation()

  return (
    <FormControl id="email">
      <FormLabel>{t("forms_form_control_helper_text_label")}</FormLabel>
      <Input type="email" placeholder={t("forms_form_control_helper_text_placeholder")}/>
      <FormHelperText>{t("forms_form_control_helper_text_helper")}</FormHelperText>
    </FormControl>
  )
}

export const FormControlInputWithErrorText = (args) => {
  const { t } = useTranslation()
  const [value, setValue] = React.useState("")
  const handleChange = (event) => setValue(event.target.value)

  return (
    <FormControl id="email" isInvalid isRequired colorScheme="error">
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

export const FormControlTextareaWithErrorText = (args) => {
  const { t } = useTranslation()
  const [value, setValue] = React.useState("")
  const handleChange = (event) => setValue(event.target.value)

  return (
    <FormControl id="write-review" isInvalid>
      <FormLabelContainer>
        <FormLabel>{t("forms_form_control_textarea_error_text_label")}</FormLabel>
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
        <Icon me="2" icon={<BiError />} />
        {t("forms_form_control_textarea_error_text_error")}
      </FormErrorMessage>
    </FormControl>
  )
}
