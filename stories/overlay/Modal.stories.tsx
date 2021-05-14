import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  useDisclosure,
} from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: Modal,
  title: "Overlay/Modal",
} as Meta

const UsageTemplate: Story = () => {
  const { t } = useTranslation()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>{t("overlay_modal_button")}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t("overlay_modal_title")}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{t("overlay_modal_description")}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="primary" mr={3} onClick={onClose}>
              {t("overlay_modal_primary_button")}
            </Button>
            <Button variant="ghost">
              {t("overlay_modal_secondary_button")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
const ModalExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Modal body</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="primary" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
`,
    },
  },
}
