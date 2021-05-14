import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title={'home'} />
      <Welcome style={{ textAlign: 'center' }}>
        <h1>Hello World</h1>
        <p>“When the heart speaks, the mind finds it indecent to object.”</p>
      </Welcome>
    </Layout>
  )
}

export default IndexPage

const Welcome = styled.div`
  width: max-content;
  margin: 40vh auto 0 auto;
  
  h1 { font-size: 3rem; margin-bottom: 20px; }
  p { font-size: 1.5rem; }
`
