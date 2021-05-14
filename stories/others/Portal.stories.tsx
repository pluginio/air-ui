import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Portal, Box, BoxProps } from "../../src"
import { useTranslation } from "react-i18next"
import { ADDRGETNETWORKPARAMS } from "dns"

export default {
  component: Portal,
  title: "Others/Portal",
} as Meta

const UsageTemplate: Story<BoxProps> = (args) => {
  const { t } = useTranslation()

  return (
    <Box bg="error.500" color="white" {...args}>
      {t("others_portal_im_here")}
      <Portal>{t("others_portal_description")}</Portal>
    </Box>
  )
}
export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Box bg="error.500" color="white" {...args}>
  I'm here,
  <Portal>This text is portaled at the end of document.body!</Portal>
</Box>
`,
    },
  },
}
