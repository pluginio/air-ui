const Textarea = {
  variants: {
    outline: (props) => ({
      field: {
        background: props.colorMode === "dark" ? "#22272C" : "gray.200",
        border: 0
      }
    }),
  },
  defaultProps: {
    errorBorderColor: "error.200",
  },
}

export default Textarea
