import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Menu, MenuButton, MenuList, MenuItem, Button } from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Menu,
  title: "Overlay/Menu",
} as Meta

const UsageTemplate: Story = () => {
  const { t } = useTranslation()

  return (
    <Menu>
      <MenuButton as={Button}>{t("overlay_menu_button")}</MenuButton>
      <MenuList>
        <MenuItem>{t("overlay_menu_item_1")}</MenuItem>
        <MenuItem>{t("overlay_menu_item_2")}</MenuItem>
        <MenuItem>{t("overlay_menu_item_3")}</MenuItem>
        <MenuItem>{t("overlay_menu_item_4")}</MenuItem>
        <MenuItem>{t("overlay_menu_item_5")}</MenuItem>
      </MenuList>
    </Menu>
  )
}
export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Menu>
  <MenuButton as={Button}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
`,
    },
  },
}
