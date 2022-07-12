import React, { ReactElement, JSXElementConstructor } from 'react'
import { GatsbyBrowser, GatsbySSR } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { Layout } from './src/components/layout'

import { theme } from './src/styles/theme'
import { CssReset } from './src/styles/cssReset'
import { CustomGlobalCss } from './src/styles/customGlobalCss'

type Props = { element: ReactElement<any, string | JSXElementConstructor<any>> }
type RootWrapper = GatsbyBrowser['wrapRootElement'] | GatsbySSR['wrapRootElement']
type PageWrapper = GatsbyBrowser['wrapPageElement'] | GatsbySSR['wrapPageElement']

// Set up any Provider components that will wrap the application.
export const rootWrapper: RootWrapper = ({ element }: Props) => (
  <>
    <CssReset />
    <CustomGlobalCss />
    {/*@ts-ignore TODO*/}
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </>
)

// Set wrapper components around pages that won’t get unmounted on page changes.
export const pageWrapper: PageWrapper = ({ element }: Props) => (
  <>
    <Layout>{element}</Layout>
  </>
)
