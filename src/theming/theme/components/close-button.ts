import { mode, transparentize } from "@chakra-ui/theme-tools"
import {airTheme} from "../"

const CloseButton = {
  baseStyle: (props) => ({
    borderRadius: "full",
    color: "primary.500",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      boxShadow: "none",
    },
    _hover: { bg: mode(transparentize("primary.500", 0.4), transparentize("primary.500", 0.12)(airTheme))(props) },
    _active: { bg: mode(transparentize("primary.500", 0.4), transparentize("primary.500", 0.12)(airTheme))(props) },
    _focus: {
      boxShadow: "outline",
    },
  }),
}

export default CloseButton
