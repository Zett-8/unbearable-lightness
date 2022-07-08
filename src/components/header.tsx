/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'

/** 2. Types **/
type Props = {
  className?: string
}

/** 3. Base component **/
const Component = ({ className }: Props) => <header className={className} />

/** 4. Styled component **/
export const Header = styled(Component)``
