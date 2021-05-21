import { mode } from "@chakra-ui/theme-tools"

const styles = {
  global: (props: any) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("gray.50", "#101923")(props),
    },
  }),
}

export default styles
