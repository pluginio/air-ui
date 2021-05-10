import { extendTheme } from "@chakra-ui/react"
import styles from "./styles"
import colors from "./foundations/colors"
import components from "./components"
import foundations from "./foundations"

export const airTheme = extendTheme({
  ...foundations,
  components,
  colors,
  styles,
})
