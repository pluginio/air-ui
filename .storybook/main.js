const path = require('path')
const toPath = (_path) => path.join(process.cwd(), _path)
const { propNames } = require("@chakra-ui/styled-system")
const excludedPropNames = propNames.concat(["as", "apply", "sx", "__css"])

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/preset-scss','@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-actions', '@storybook/addon-a11y'],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('./node_modules/@emotion/react'),
          'emotion-theming': toPath('./node_modules/@emotion/react')
        }
      }
    }
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        const isStyledSystemProp = excludedPropNames.includes(prop?.name)
        const isHTMLElementProp =
          prop?.parent?.fileName.includes("node_modules") ?? false
  
        return !(isStyledSystemProp || isHTMLElementProp)
      },
    }
  }
}
