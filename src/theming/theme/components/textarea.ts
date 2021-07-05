const Textarea = {
  variants: {
    outline: (props) => ({
        background: props.colorMode === "dark" ? "#22272C" : "gray.100",
        border: 0
    }),
  },
  defaultProps: {
    focusBorderColor: "primary.500",
    errorBorderColor: "error.500",
  },
}

export default Textarea
