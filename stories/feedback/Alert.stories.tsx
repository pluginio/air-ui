import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton, useTheme } from '../../src'
import { useTranslation } from "react-i18next"

export default {
  component: Alert,
  subcomponents: {AlertIcon, AlertTitle, AlertDescription, CloseButton},
  title: 'Feedback/Alert',
  argTypes: {
    status: {
      options: ['error', 'success', 'warning', 'info'],
      control: {
        type: 'select',
      }
    }
  }
} as Meta

export const Usage = (args) => {
  const { t } = useTranslation()
  const theme = useTheme()

  return (
  <Alert {...args}>
     <AlertIcon />
     <AlertTitle mr={2}>{t("feedback_alert_title")}</AlertTitle>
     <AlertDescription>{t("feedback_alert_description")}</AlertDescription>
     <CloseButton position='absolute' top='8px' left={theme.direction === "ltr" ? "unset" : "8px"}  right={theme.direction === "ltr" ? "8px" : "unset"} />
   </Alert>
)}