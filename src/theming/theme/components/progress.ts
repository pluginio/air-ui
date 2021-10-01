const Progress = {
  baseStyle: (props) => ({
    track:{
      borderRadius: "full",
      background: props.colorMode === "dark" ? "#22272C" : "gray.100",
    },
    filledTrack: {
      borderRadius: "full",
    },
  }),
  defaultProps: {
    colorScheme: "success",
  },
}

export default Progress
