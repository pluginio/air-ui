import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Carousel, CarouselSlide, CarouselProps, AspectRatio, Image, Box } from '../../src'

export default {
  component: Carousel,
  subcomponents: { CarouselSlide },
  title: 'Others/Carousel',
} as Meta

export const Usage = ({ pagination = true } : CarouselProps) => {
  return (
    <Box maxW="680px" m="auto">
      <Carousel pagination={pagination}>
        <CarouselSlide>
          <AspectRatio ratio={16 / 9}>
            <Image height="500px" src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/banner_example.jpg?fbclid=IwAR0ZqTsSC1klaoEJTi3PIoqJpxAdmmvB6Eadm9frm6AehGjZURLsfkJffGo" borderRadius="20px" />
          </AspectRatio>
        </CarouselSlide>

        <CarouselSlide>
          <AspectRatio ratio={16 / 9}>
            <Image height="500px" src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/banner_example.jpg?fbclid=IwAR0ZqTsSC1klaoEJTi3PIoqJpxAdmmvB6Eadm9frm6AehGjZURLsfkJffGo" borderRadius="20px" />
          </AspectRatio>
        </CarouselSlide>

        <CarouselSlide>
          <AspectRatio ratio={16 / 9}>
            <Image height="500px" src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/banner_example.jpg?fbclid=IwAR0ZqTsSC1klaoEJTi3PIoqJpxAdmmvB6Eadm9frm6AehGjZURLsfkJffGo" borderRadius="20px" />
          </AspectRatio>
        </CarouselSlide>

        <CarouselSlide>
          <AspectRatio ratio={16 / 9}>
            <Image height="500px" src="https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/banner_example.jpg?fbclid=IwAR0ZqTsSC1klaoEJTi3PIoqJpxAdmmvB6Eadm9frm6AehGjZURLsfkJffGo" borderRadius="20px" />
          </AspectRatio>
        </CarouselSlide>
      </Carousel>
    </Box>
  )
}
