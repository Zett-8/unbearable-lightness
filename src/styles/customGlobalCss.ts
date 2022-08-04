import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const CustomGlobalCss: any = createGlobalStyle`
  html {
    height: 100%;
    font-family: ${theme.font.family.sanSerif};
    font-size: 62.5%;
    font-weight: ${theme.font.weight['300']};
    color: ${theme.color.regularBlack};
    background-color: ${theme.color.backgroundWhite};
  }
  //stylelint-disable
  body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }
`
