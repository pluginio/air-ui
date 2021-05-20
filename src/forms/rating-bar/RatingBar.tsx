import React, { useState } from "react"
import { Icon } from "../../media-icons/icon"
import { IconButton } from "../icon-button"
import { MdStarBorder, MdStar } from "react-icons/md"
import { Box } from "../../layout/box"
import { useMultiStyleConfig, HTMLChakraProps } from "@chakra-ui/react"
import { StyleConfig } from "@chakra-ui/theme-tools"

export interface RatingBarProps extends StyleConfig, HTMLChakraProps<"div"> {
  value?: number
  editable?: boolean
  size?: string
}

export const RatingBar: React.FC<RatingBarProps> = (props) => {
  const { value = 0, editable, ...rest } = props
  const styles = useMultiStyleConfig("RatingBar", props)
  const [percentage, setPercentage] = useState(0)

  return (
    <Box __css={styles.container} {...rest}>
      <Box display="inline-block" w="auto" p="0" m="auto" position="relative">
        <Box
          display="flex"
          zIndex={10}
          position="absolute"
          overflow="hidden"
          pointerEvents="none"
          width={`${editable ? percentage : value}%`}
        >
          <Icon as={MdStar} __css={styles.foregroundStar} />
          <Icon as={MdStar} __css={styles.foregroundStar} />
          <Icon as={MdStar} __css={styles.foregroundStar} />
          <Icon as={MdStar} __css={styles.foregroundStar} />
          <Icon as={MdStar} __css={styles.foregroundStar} />
        </Box>
        <Box display="flex" zIndex={0}>
          <IconButton
            onClick={editable ? () => setPercentage(20) : undefined}
            aria-label="star rating 1"
            icon={<MdStarBorder />}
            __css={styles.backgroundStar}
          />
          <IconButton
            onClick={editable ? () => setPercentage(40) : undefined}
            aria-label="star rating 2"
            icon={<MdStarBorder />}
            __css={styles.backgroundStar}
          />
          <IconButton
            onClick={editable ? () => setPercentage(60) : undefined}
            aria-label="star rating 3"
            icon={<MdStarBorder />}
            __css={styles.backgroundStar}
          />
          <IconButton
            onClick={editable ? () => setPercentage(80) : undefined}
            aria-label="star rating 4"
            icon={<MdStarBorder />}
            __css={styles.backgroundStar}
          />
          <IconButton
            onClick={editable ? () => setPercentage(100) : undefined}
            aria-label="star rating 5"
            icon={<MdStarBorder />}
            __css={styles.backgroundStar}
          />
        </Box>
      </Box>
    </Box>
  )
}
