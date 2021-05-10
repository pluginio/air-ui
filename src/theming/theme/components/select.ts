const Select = {
  variants: {
    outline: (props) => ({
      field: {
        background: props.colorMode === "dark" ? "#22272C" : "gray.200",
        border: 0
      }
    }),
  }
}

export default Select
