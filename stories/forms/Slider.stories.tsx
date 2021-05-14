import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderProps,
} from "../../src"

export default {
  component: Slider,
  title: "Forms/Slider",
} as Meta

const UsageTemplate: Story<SliderProps> = (args) => (
  <Slider aria-label="slider-ex-1" defaultValue={30} {...args}>
    <SliderTrack>
      <SliderFilledTrack />
    </SliderTrack>
    <SliderThumb />
  </Slider>
)

export const Usage = UsageTemplate.bind({})
Usage.args = {}
Usage.parameters = {
  docs: {
    source: {
      code: `
<Slider aria-label='slider-ex-1' defaultValue={30}>
  <SliderTrack>
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb />
</Slider>
`,
    },
  },
}
