import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from '../../src'
import { useTranslation } from 'react-i18next'

export default {
  component: Button,
  title: 'Forms/Button',
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['solid', 'outline', 'ghost', 'link', 'pill', 'unstyled']
      }
    },
    colorScheme: {
      control: {
        type: 'select',
        options: ['primary', 'error', 'warning', 'success', 'info']
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg']
      }
    },
    spinnerPlacement : {
      control: {
        type: 'radio',
        options: ['start', 'end']
      }
    }
  }
} as Meta

const Template: Story<ButtonProps> = (args) => {
  const { t } = useTranslation()
  return <Button {...args}>{t('forms_button_text')}</Button>
}

export const Solid = Template.bind({})
Solid.args = {
  colorScheme: 'primary',
  iconSpacing: "2",
  isActive: false,
  isDisabled: false,
  isFullWidth: false,
  isLoading: false,
  // leftIcon: <></>,
  loadingText: '',
  // rightIcon: <></>,
  size: 'md',
  // spinner: <></>,
  spinnerPlacement: 'start',
  variant: 'solid',
} as ButtonProps

export const Outline = Template.bind({})
Outline.args = {
  colorScheme: 'primary',
  iconSpacing: "2",
  isActive: false,
  isDisabled: false,
  isFullWidth: false,
  isLoading: false,
  // leftIcon: <></>,
  loadingText: '',
  // rightIcon: <></>,
  size: 'md',
  // spinner: <></>,
  spinnerPlacement: 'start',
  variant: 'outline',
} as ButtonProps

export const Ghost = Template.bind({})
Ghost.args = {
  colorScheme: 'primary',
  iconSpacing: "2",
  isActive: false,
  isDisabled: false,
  isFullWidth: false,
  isLoading: false,
  // leftIcon: <></>,
  loadingText: '',
  // rightIcon: <></>,
  size: 'md',
  // spinner: <></>,
  spinnerPlacement: 'start',
  variant: 'ghost',
} as ButtonProps

export const Link = Template.bind({})
Link.args = {
  colorScheme: 'primary',
  iconSpacing: "2",
  isActive: false,
  isDisabled: false,
  isFullWidth: false,
  isLoading: false,
  // leftIcon: <></>,
  loadingText: '',
  // rightIcon: <></>,
  size: 'md',
  // spinner: <></>,
  spinnerPlacement: 'start',
  variant: 'link',
} as ButtonProps

export const Pill = Template.bind({})
Pill.args = {
  colorScheme: 'primary',
  iconSpacing: "2",
  isActive: false,
  isDisabled: false,
  isFullWidth: false,
  isLoading: false,
  // leftIcon: <></>,
  loadingText: '',
  // rightIcon: <></>,
  size: 'xs',
  // spinner: <></>,
  spinnerPlacement: 'start',
  variant: 'pill'
} as ButtonProps

export const Unstyled = Template.bind({})
Unstyled.args = {
  colorScheme: 'primary',
  iconSpacing: "2",
  isActive: false,
  isDisabled: false,
  isFullWidth: false,
  isLoading: false,
  // leftIcon: <></>,
  loadingText: '',
  // rightIcon: <></>,
  size: 'md',
  // spinner: <></>,
  spinnerPlacement: 'start',
  variant: 'unstyled',
} as ButtonProps
