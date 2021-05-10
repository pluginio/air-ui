const Checkbox = {
  defaultProps: {
    size: "lg",
  },
  baseStyle: (props) => ({
    control: {
      borderRadius: "6px",
      borderColor: "primary.200",
      _checked: {
        background: "transparent",
        borderColor: "primary.200",
        color: props.colorMode === "dark" ? "white" : "black",
        _hover: {
          background: "transparent",
          borderColor: "primary.200",
        },
      },
    },
    label: {},
  }),
}

export default Checkbox
