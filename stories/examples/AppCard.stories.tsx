import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Flex, Image, Heading, Text, Button, useColorMode } from '../../src'
import { useTranslation } from 'react-i18next'

export default {
  component: Flex,
  subcomponents: {Image, Heading, Text, Button},
  title: '0.Examples/AppCard',
} as Meta

interface AppCardProps {
  iconSrc?: string
}

export const AppCard: React.FC<AppCardProps> = ({ iconSrc }) => {
  const { t } = useTranslation()
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
  <Flex bgColor={isDark ? "#22272C" : "gray.200"} borderStartRadius="22px" borderEndRadius="10px" lineHeight="none" h="114px" maxW="320px" mb="4">
    <Image width="114px" height="114px" src={iconSrc ?? "https://raw.githubusercontent.com/pluginio/static-content/main/lang/en/docs/v1/images/cut_the_rope_2_icon.webp"} alt="cut the rope 2" borderRadius="22px"/>
    <Flex flex="1" flexDir="column" justifyContent="center" ps="4" pe="2" py="2">
      <Heading noOfLines={1} as="h6" fontSize="md" mb="2" fontWeight="medium">{t('app_card_title')}</Heading>
      <Text noOfLines={2} mb="4" fontSize="sm">{t('app_card_description')}</Text>
      <Flex alignItems="center">
        <Button variant="pill" size="xs" fontSize="sm" me="4">{t('app_card_button_open')}</Button>
        <Text fontSize="xs">{t('app_card_in_app')} <br /> {t('app_card_purchases')}</Text>
      </Flex>
    </Flex>
  </Flex>)
}
