import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { Menu, MenuButton, MenuList, MenuItem, Button } from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Menu,
  title: "Overlay/Menu",
} as Meta

export const Usage = () => {
  const { t } = useTranslation()

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<></>}>
        {t("overlay_menu_button")}
      </MenuButton>
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
