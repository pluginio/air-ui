const Input = {
  variants: {
    outline: (props) => ({
      field: {
        background: props.colorMode === "dark" ? "#22272C" : "gray.100",
      }
    }),
  },
  defaultProps: {
    focusBorderColor: "primary.500",
    errorBorderColor: "error.500",
  },
}

export default Input
