import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Grid, GridItem, GridProps } from "../../src"

export default {
  component: Grid,
  title: "Layout/Grid",
} as Meta

const UsageTemplate: Story<GridProps> = (args) => (
  <Grid
    h="200px"
    templateRows="repeat(2, 1fr)"
    templateColumns="repeat(5, 1fr)"
    gap={4}
    {...args}
  >
    <GridItem rowSpan={2} colSpan={1} bg="error.500" />
    <GridItem colSpan={2} bg="warning.500" />
    <GridItem colSpan={2} bg="warning.500" />
    <GridItem colSpan={4} bg="primary.500" />
  </Grid>
)
export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Grid
  h="200px"
  templateRows="repeat(2, 1fr)"
  templateColumns="repeat(5, 1fr)"
  gap={4}
>
  <GridItem rowSpan={2} colSpan={1} bg="error.500" />
  <GridItem colSpan={2} bg="warning.500" />
  <GridItem colSpan={2} bg="warning.500" />
  <GridItem colSpan={4} bg="primary.500" />
</Grid>
`,
    },
  },
}
