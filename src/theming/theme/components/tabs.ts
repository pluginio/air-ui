// const parts = ["root", "tablist", "tab", "tabpanels", "tabpanel", "indicator"]

// tablist
// tab

const Tabs = {
  defaultProps: {
    variant: "navigator"
  },
  baseStyle: (props) => ({

  }),
  variants: {
    navigator: (props) => ({
      tablist: {
        overflowX: "auto",
        overflowY: "hidden",
        borderRadius: "10px",
        bgColor: props.colorMode === "dark" ? "#22272C" : "gray.100",
        h: "100px",
        justifyContent: "space-between",
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
      tab: {
        display: "flex",
        p: "0",
        minW: "100px",
        minH: "100px",
        w: "100px",
        h: "100px",
        flexDir: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        color: "primary.200",
        _selected: { color: "white", bg: "primary.200" },
        _focus: {
          boxShadow: 'none'
        }
      }
    }),
  },
}

export default Tabs
