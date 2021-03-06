const Input = {
  variants: {
    outline: (props) => ({
      field: {
        background: props.colorMode === "dark" ? "#22272C" : "gray.100",
        border: 0,
        height: "48px"
      }
    }),
  },
  defaultProps: {
    focusBorderColor: "primary.500",
    errorBorderColor: "error.500",
  },
}

export default Input
