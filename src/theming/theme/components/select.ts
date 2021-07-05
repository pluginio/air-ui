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
        background: props.colorMode === "dark" ? "#22272C" : "gray.100",
        border: 0
      },
      icon: {
        insetEnd: 0
      }
    }),
  }
}

export default Select
