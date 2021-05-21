import {airTheme} from "../index"
import { mode, transparentize } from "@chakra-ui/theme-tools"

const Badge = {
  defaultProps: {
    variant: "solid",
    colorScheme: "primary",
  },
  variants: {
    solid: (props) => ({
      bg: mode(`${props.colorScheme}.500`, transparentize(`${props.colorScheme}.500`, 0.2)(airTheme))(props),
      color: mode(`white`, `${props.colorScheme}.800`)(props),
    }),
  },
}

export default Badge
