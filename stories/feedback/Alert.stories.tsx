import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import {
  Alert,
  AlertProps,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useTheme,
  Spacer,
} from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Alert,
  subcomponents: { AlertIcon, AlertTitle, AlertDescription, CloseButton },
  title: "Feedback/Alert",
  argTypes: {
    status: {
      options: ["error", "success", "warning", "info"],
      control: {
        type: "select",
      },
    },
  },
} as Meta

const Template: Story<AlertProps> = (args) => {
  const { t } = useTranslation()
  const theme = useTheme()

  return (
    <Alert {...args}>
      <AlertIcon />
      <AlertTitle mr={2}>{t("feedback_alert_title")}</AlertTitle>
      <AlertDescription>{t("feedback_alert_description")}</AlertDescription>
      <Spacer />
      <CloseButton />
    </Alert>
  )
}

export const Sandbox = Template.bind({})

Sandbox.parameters = {
  docs: { disable: true },
}

export const Success = Template.bind({})
Success.args = {
  status: "success",
}
Success.parameters = {
  docs: {
    source: {
      code: `
<Alert status="success">
  <AlertIcon />
  <AlertTitle mr={2}>Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
  <Spacer />
  <CloseButton />
</Alert>`,
    },
  },
}

export const Error = Template.bind({})
Error.args = {
  status: "error",
}
Error.parameters = {
  docs: {
    source: {
      code: `
<Alert status="error">
  <AlertIcon />
  <AlertTitle mr={2}>Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
  <Spacer />
  <CloseButton />
</Alert>`,
    },
  },
}

export const Warning = Template.bind({})
Warning.args = {
  status: "warning",
}
Warning.parameters = {
  docs: {
    source: {
      code: `
<Alert status="warning">
  <AlertIcon />
  <AlertTitle mr={2}>Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
  <Spacer />
  <CloseButton />
</Alert>`,
    },
  },
}

export const Info = Template.bind({})
Info.args = {
  status: "info",
}
Info.parameters = {
  docs: {
    source: {
      code: `
<Alert status="info">
  <AlertIcon />
  <AlertTitle mr={2}>Title</AlertTitle>
  <AlertDescription>Description</AlertDescription>
  <CloseButton />
</Alert>`,
    },
  },
}
