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
      bg: `${props.colorScheme}.500`,
      color: "#FFFFFF"
    }),
    solid: (props) => ({
      color: "#FFFFFF"
    })
  },
}

export default Button
