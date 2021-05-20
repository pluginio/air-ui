const Tag = {
  defaultProps: {
    variant: "subtle",
    colorScheme: "primary",
    size: "sm",
  },
  baseStyle: (props) => ({
    container: {
      borderRadius: "full",
      me: "2",
      mb: "2",
    },
  }),
  variants: {
    subtle: (props) => ({
      container: {
        borderRadius: "full",
        p: "0",
        minH: "26px"
      },
      label: {
        px: "4",
        color: "white",
      },
      closeButton: {
        minW: "26px",
        minH: "26px",
        w: "26px",
        h: "26px",
        bg: "primary.200",
        color: "white",
        borderRadius: "full",
        opacity: 1,
        margin: "0",
        fontSize: "15px",
        _focus: {
          boxShadow: "outline",
          bg: "primary.200",
        },
      },
    }),
  },
}

export default Tag
