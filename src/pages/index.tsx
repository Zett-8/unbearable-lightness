/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'

import { Layout } from '../components/layout'
import { MetaTag } from '../components/metaTag'

import { useSiteMetadata } from '../providers/hooks/useSiteMetadata'

/** 2. Types **/
type Props = {
  className?: string
  title: string
}

/** 3. Base component **/
const Component = ({ className, title }: Props) => (
  <Layout>
    <MetaTag title={'home'} />
    <div className={className} style={{ textAlign: 'center' }}>
      <h1>{title}</h1>
      <p>“When the heart speaks, the mind finds it indecent to object.”</p>
    </div>
  </Layout>
)

/** 4. Styled component **/
const StyledComponent = styled(Component)`
  width: max-content;
  margin: 0 auto;
  padding-top: 40vh;

  > h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  > p {
    font-size: 1.5rem;
  }
`

/** 5. Container **/
const IndexPage = (props: any) => {
  const { siteMetadata } = useSiteMetadata()
  return <StyledComponent {...props} title={siteMetadata.title} />
}
export default IndexPage
