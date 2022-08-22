/** 1. Imports **/
import React from 'react'
import { PageProps } from 'gatsby'
import { MetaTag } from '../components/metaTag'

/** 3. Base component **/
const NotFoundPage = (props: PageProps) => (
  <>
    <MetaTag title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
)
export default NotFoundPage
