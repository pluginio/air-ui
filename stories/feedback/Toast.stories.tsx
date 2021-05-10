import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { useToast, Button } from '../../src'
import { useTranslation } from "react-i18next"

export default {
  title: 'Feedback/Toast'
} as Meta

export const Usage = () => {
  const { t } = useTranslation()
  const toast = useToast()

  return (
    <Button
      onClick={() =>
        toast({
          title: t("feedback_toast_title"),
          description: t("feedback_toast_description"),
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      {t("feedback_toast_button")}
    </Button>
  )
}
