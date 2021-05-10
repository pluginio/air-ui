import React, { useEffect } from 'react'
import { ChakraProvider, extendTheme, useColorMode, ColorModeScript } from '@chakra-ui/react'
import { I18nextProvider, useTranslation } from 'react-i18next'
import i18n from '../i18n/i18n'
import { airTheme } from '../src/theming/theme'
import 'swiper/swiper.scss'

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'ar', right: '🇦🇪', title: 'العربية' },
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'es', right: '🇪🇸', title: 'Español' },
        { value: 'fr', right: '🇫🇷', title: 'Français' },
        { value: 'ko', right: '🇰🇷', title: '한국어' },
        { value: 'th', right: '🇹🇭', title: 'ไทย' },
        { value: 'zh', right: '🇨🇳', title: '中文' }
      ]
    }
  },
  theme: {
    name: 'Theme',
    description: 'Theme selection',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', right: '☀️', title: 'light' },
        { value: 'dark', right: '🌑', title: 'dark' }
      ]
    }
  }
}

export const parameters = {
  options: {
    storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }))
  },
  actions: { 
    argTypesRegex: '^on[A-Z].*'
  }
}

const ThemeChanger = (context) => {
  const { setColorMode } = useColorMode();

  useEffect(() => {
      setColorMode(context.context.globals.theme)
  }, [context.context.globals.theme])

  return <div/>
}


const withThemeProvider = (Story, context) => {
  const { t } = useTranslation()

  const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
  }

  const directionTheme = extendTheme({ ...airTheme, config, direction: t('dir') })

  useEffect(() => {
    i18n.changeLanguage(context.globals.locale)
    document.documentElement.lang = context.globals.locale
    document.documentElement.dir = directionTheme.direction
  }, [i18n.language, context.globals.locale])

  return (
    <I18nextProvider i18n={i18n}>
      <ChakraProvider resetCSS theme={directionTheme}>
        <ThemeChanger context={context}/>
        <ColorModeScript initialColorMode={directionTheme.config.initialColorMode} />
        <Story {...context} />
      </ChakraProvider>
    </I18nextProvider>
  )
}

export const decorators = [withThemeProvider]
