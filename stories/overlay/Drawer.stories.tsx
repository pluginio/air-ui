import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Drawer,
  title: "Overlay/Drawer",
} as Meta

export const Usage = (args) => {
  const { t } = useTranslation()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        {t("overlay_drawer_button")}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{t("overlay_drawer_title")}</DrawerHeader>

            <DrawerBody></DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                {t("overlay_drawer_secondary_button")}
              </Button>
              <Button>{t("overlay_drawer_primary_button")}</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
