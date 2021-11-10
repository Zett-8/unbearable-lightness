import React from 'react'
import { CssReset } from './src/styles/cssReset'
import { CustomGlobalCss } from './src/styles/customGlobalCss'

// Set up any Provider components that will wrap the application.
export const rootWrapper = ({ element }) => <>{element}</>

// Set wrapper components around pages that won’t get unmounted on page changes.
export const pageWrapper = ({ element }) => (
  <>
    <CssReset />
    <CustomGlobalCss />
    {element}
  </>
)
