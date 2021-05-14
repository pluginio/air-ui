import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Skeleton, SkeletonProps } from "../../src"

export default {
  component: Skeleton,
  title: "Feedback/Skeleton",
} as Meta

const UsageTemplate: Story<SkeletonProps> = (args) => <Skeleton {...args} />

export const Usage = UsageTemplate.bind({})
Usage.args = {
  height: "80px",
} as SkeletonProps
Usage.parameters = {
  docs: {
    source: {
      code: `
<Skeleton height="80px" />
`,
    },
  },
}
