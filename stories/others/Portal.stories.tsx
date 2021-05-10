import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Portal, Box } from '../../src'
import { useTranslation } from "react-i18next"

export default {
  component: Portal,
  title: 'Others/Portal'
} as Meta

export const Usage = () => {
  const { t } = useTranslation()

  return (
    <Box bg="red.400" color="white">
       {t("others_portal_im_here")}
      <Portal>{t("others_portal_description")}</Portal>
    </Box>
  )
}
