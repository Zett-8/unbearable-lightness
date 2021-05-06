import React from 'react'

// Set up any Provider components that will wrap the application.
export const rootWrapper = ({ element }) => (
  <>
    {element}
  </>
)

// Set wrapper components around pages that won’t get unmounted on page changes.
export const pageWrapper = ({ element }) => (
  <>
    {element}
  </>
)
