const RatingBar = {
  parts: ["container", "backgroundStar", "foregroundStar"],
  baseStyle: (props) => ({
    backgroundStar: {
      pointerEvents: props.editable ? "visible" : "none",
    },
  }),
  sizes: {
    sm: (props) => ({
      backgroundStar: {
        fontSize: "1rem",
        color: "primary.500",
      },
      foregroundStar: {
        fontSize: "1rem",
        color: "primary.500",
      },
    }),
    lg: (props) => ({
      backgroundStar: {
        fontSize: "2.2rem",
        color: "primary.500",
      },
      foregroundStar: {
        fontSize: "2.2rem",
        color: "primary.500",
      },
    }),
  },
  defaultProps: {
    size: "lg",
  },
}

export default RatingBar
