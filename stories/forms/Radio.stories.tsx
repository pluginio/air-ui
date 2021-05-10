import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Radio, RadioGroup, Stack } from '../../src'
import { useTranslation } from "react-i18next"

export default {
  component: Radio,
  title: 'Forms/Radio'
} as Meta

export const Usage = (args) => {
  const { t } = useTranslation()
  const [value, setValue] = React.useState('1')

  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction='row'>
        <Radio value='1'>{t("form_radio_option_1")}</Radio>
        <Radio value='2'>{t("form_radio_option_2")}</Radio>
        <Radio value='3'>{t("form_radio_option_3")}</Radio>
      </Stack>
    </RadioGroup>
  )
}
