const Button = {
  defaultProps: {
    variant: "solid",
    colorScheme: "primary"
  },
  variants: {
    pill: (props) => ({
      borderRadius: "full",
      size: "xs",
      textTransform: "uppercase",
      px: "4",
      bg: "primary.200",
      color: "#FFFFFF"
    }),
    solid: (props) => ({
      color: "#FFFFFF",
    }),
  },
}

export default Button
