/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'
import { MetaTag } from '../components/metaTag'
import { useSiteMetadata } from '../providers/hooks/useSiteMetadata'
import { PageProps } from 'gatsby'

/** 2. Types **/
type Props = {
  className?: string
  title: string
}

/** 3. Base component **/
const Component = ({ className, title }: Props) => (
  <>
    <MetaTag title={'home'} />
    <div className={className} style={{ textAlign: 'center' }}>
      <h1>{title}</h1>
      <p>“When the heart speaks, the mind finds it indecent to object.”</p>
    </div>
  </>
)

/** 4. Styled component **/
const StyledComponent = styled(Component)`
  width: max-content;
  padding-top: 40vh;
  margin: 0 auto;

  > h1 {
    margin-bottom: 20px;
    font-size: 3rem;
  }

  > p {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.subTextGrey};
  }
`

/** 5. Container **/
const IndexPage = (props: PageProps) => {
  const { siteMetadata } = useSiteMetadata()
  return <StyledComponent title={siteMetadata.title} />
}
export default IndexPage
