const Select = {
  baseStyle: {
    icon: {
      width: "48px",
      height: "48px",
    }
  },
  variants: {
    outline: (props) => ({
      field: {
        background: props.colorMode === "dark" ? "#22272C" : "gray.200",
        border: 0
      },
      icon: {
        right: 0
      }
    }),
  }
}

export default Select
