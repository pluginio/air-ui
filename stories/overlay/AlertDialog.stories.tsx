import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "../../src"
import { useTranslation } from "react-i18next"

export default {
  component: AlertDialog,
  title: "Overlay/AlertDialog",
} as Meta

const UsageTemplate: Story = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = React.useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = React.useRef()

  return (
    <>
      <Button colorScheme="error" onClick={() => setIsOpen(true)}>
        {t("overlay_alert_dialog_button")}
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {t("overlay_alert_dialog_title")}
            </AlertDialogHeader>

            <AlertDialogBody>
              {t("overlay_alert_dialog_description")}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                {t("overlay_alert_dialog_primary_button")}
              </Button>
              <Button colorScheme="error" onClick={onClose} ml={3}>
                {t("overlay_alert_dialog_secondary_button")}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
const AlertDialogExample = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = React.useRef()

  return (
    <>
      <Button colorScheme="error" onClick={() => setIsOpen(true)}>
        Delete Customer
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="error" onClick={onClose} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
`,
    },
  },
}
