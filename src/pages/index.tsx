import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home"/>
      <div style={{ textAlign: 'center' }}>
        <h1>Hello World</h1>
        <p>“When the heart speaks, the mind finds it indecent to object.”</p>
      </div>
    </Layout>
  )
}

export default IndexPage
