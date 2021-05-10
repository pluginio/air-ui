import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Text, useDisclosure } from '../../src'
import { useTranslation } from "react-i18next"

export default {
  component: Modal,
  title: 'Overlay/Modal'
} as Meta

export const Usage = () => {
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
            <Button variant="ghost">{t("overlay_modal_secondary_button")}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}