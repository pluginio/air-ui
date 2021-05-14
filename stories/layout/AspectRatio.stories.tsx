import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { AspectRatio, AspectRatioProps, Image } from "../../src"

export default {
  component: AspectRatio,
  title: "Layout/AspectRatio",
} as Meta

const UsageTemplate: Story<AspectRatioProps> = (args) => (
  <AspectRatio {...args}>
    <Image
      src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/banner_example.jpg?fbclid=IwAR0ZqTsSC1klaoEJTi3PIoqJpxAdmmvB6Eadm9frm6AehGjZURLsfkJffGo"
      alt="banner example"
    />
  </AspectRatio>
)

export const Usage = UsageTemplate.bind({})
Usage.args = {
  ratio: 16 / 9,
}
Usage.parameters = {
  docs: {
    source: {
      code: `
<AspectRatio ratio={16 / 9}>
  <Image 
    src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/banner_example.jpg?fbclid=IwAR0ZqTsSC1klaoEJTi3PIoqJpxAdmmvB6Eadm9frm6AehGjZURLsfkJffGo" 
    alt="banner example"
  />
</AspectRatio>
`,
    },
  },
}
