import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { useToast, Button } from "../../src"
import { useTranslation } from "react-i18next"

export default {
  title: "Feedback/Toast",
} as Meta

const UsageTemplate: Story = () => {
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

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
const ToastExample = () => {
  const toast = useToast()

  return (
    <Button
      onClick={() =>
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>
  )
}
`,
    },
  },
}
