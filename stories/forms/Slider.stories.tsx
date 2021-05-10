import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '../../src'

export default {
  component: Slider,
  title: 'Forms/Slider'
} as Meta

export const Usage = (args) => (
  <Slider aria-label='slider-ex-1' defaultValue={30}>
    <SliderTrack>
      <SliderFilledTrack />
    </SliderTrack>
    <SliderThumb />
  </Slider>
)
