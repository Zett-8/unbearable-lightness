/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'

/** 2. Types **/
type Props = {
  className?: string
}

/** 3. Base component **/
const Component = ({ className }: Props) => (
  <footer className={className}>
    {/*© {new Date().getFullYear()}, Built with*/}
    {/*{` `}*/}
    {/*<a href="https://www.gatsbyjs.org">Gatsby</a>*/}
  </footer>
)

/** 4. Styled component **/
export const Footer = styled(Component)``
