import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import {
  Editable,
  EditablePreview,
  EditableInput,
  useEditableControls,
  ButtonGroup,
  IconButton,
  Flex,
} from "../../src"
import { BiEdit } from "react-icons/bi"
import { IoMdCheckmark, IoMdClose } from "react-icons/io"
import { useTranslation } from "react-i18next"

export default {
  component: Editable,
  title: "Forms/Editable",
} as Meta

export const Usage = () => {
  const { t } = useTranslation()

  return (
    <Editable defaultValue={t("forms_editable_text")}>
      <EditablePreview />
      <EditableInput />
    </Editable>
  )
}

export const WithCustomControls = () => {
  const { t } = useTranslation()

  const EditableControls = () => {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls()

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton
          aria-label="submit"
          icon={<IoMdCheckmark />}
          {...getSubmitButtonProps()}
        />
        <IconButton
          aria-label="cancel"
          icon={<IoMdClose />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          aria-label="edit"
          size="sm"
          icon={<BiEdit />}
          {...getEditButtonProps()}
        />
      </Flex>
    )
  }

  return (
    <Editable
      textAlign="center"
      defaultValue={t("forms_editable_custom_controls_text")}
      fontSize="2xl"
      isPreviewFocusable={false}
    >
      <EditablePreview />
      <EditableInput />
      <EditableControls />
    </Editable>
  )
}
