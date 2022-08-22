/** 1. Imports **/
import React from 'react'
import type { PageProps } from 'gatsby'
import styled from 'styled-components'

import { Header } from './header'
import { Footer } from './footer'

/** 2. Types **/
type Props = PageProps & {
  className?: string
}

/** 3. Base component **/
const Component = ({ className, children }: Props) => (
  <>
    <Header />
    <main className={className}>{children}</main>
    <Footer />
  </>
)

/** 4. Styled component **/
export const Layout = styled(Component)``
