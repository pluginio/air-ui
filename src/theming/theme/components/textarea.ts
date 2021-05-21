const Textarea = {
  variants: {
    outline: (props) => ({
      field: {
        background: props.colorMode === "dark" ? "#22272C" : "gray.200",
      }
    }),
  },
  defaultProps: {
    focusBorderColor: "primary.500",
    errorBorderColor: "error.500",
  },
}

export default Textarea
