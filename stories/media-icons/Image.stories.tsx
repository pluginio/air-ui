import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Image, ImageProps } from "../../src"

export default {
  component: Image,
  title: "Media & Icons/Image",
} as Meta

const UsageTemplate: Story<ImageProps> = (args) => <Image {...args} />

export const Usage = UsageTemplate.bind({})
Usage.args = {
  src: "https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/banner_example.jpg",
  alt: "cut the rope",
} as ImageProps
Usage.parameters = {
  docs: {
    source: {
      code: `
<Image
  src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/banner_example.jpg",
  alt="cut the rope"
/>
`,
    },
  },
}
