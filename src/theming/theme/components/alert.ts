const Alert = {
  defaultProps: {
    variant: "solid",
  },
  baseStyle: (props) => ({
    container: {
      borderRadius: "10px",
    },
  }),
  variants: {
    solid: (props) => ({
      container: {
        color: "white",
      },
    }),
  },
}

export default Alert
