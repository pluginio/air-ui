import React, { useState } from "react";
import SwiperCore, { A11y, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../../forms/button";
import { Box } from "../../layout/box";
import { Flex } from "../../layout/flex";
import { useColorMode } from "../../theming/color-mode";

SwiperCore.use([A11y, Mousewheel]);

export interface CarouselProps {
  pagination?: boolean
  paddingLeft?: string | number
  paddingRight?: string | number
  spaceBetween?: number
}

const Carousel: React.FC<CarouselProps> = ({ children, pagination, paddingLeft, paddingRight, spaceBetween = 0 }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiper, setSwiper] = useState<SwiperCore>()
  
  return (
    <Box w="full">
      <Swiper
        keyboard={{ enabled: true }}
        mousewheel={{
          forceToAxis: true,
        }}
        style={{paddingLeft, paddingRight}}
        draggable={true}
        slidesPerView="auto"
        spaceBetween={spaceBetween}
        observer
        observeParents
        onSwiper={(s: SwiperCore) => {
          setActiveIndex(s.activeIndex)
          setSwiper(s)
        }}
        onSlideChange={(s: SwiperCore) => {
          setActiveIndex(s.activeIndex)
        }}
      >
        {children}
      </Swiper>
      <Flex
        display={pagination ? "flex" : "none"}
        w="full"
        h="48px"
        mt="2"
        justifyContent="center"
        alignItems="center"
        bgColor={isDark ? "#22272C" : "gray.100"}
        borderRadius="10px"
        className="swiper-pagination"
        position="unset"
      >
        {
          swiper?.slides.map((_, index)=>{
            return (
              <Button
                key={index}
                mx="2"
                p="0"
                minW="7px"
                width={index === activeIndex ? "11px" : "7px"}
                height={index === activeIndex ? "11px" : "7px"}
                bgColor={index === activeIndex ? "#00AEF9" : "#8D8D8D"}
                onClick={() => {
                  swiper?.slideTo(index)
                }}
              />
            );
          })
        }
      </Flex>
    </Box>
  );
};

export { Carousel, SwiperSlide as CarouselSlide };

