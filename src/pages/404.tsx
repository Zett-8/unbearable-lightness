/** 1. Imports **/
import React from 'react'
import { HeadProps, PageProps } from 'gatsby'
import { SEO } from '../components/seo'

/** 3. Base component **/
const NotFoundPage = (props: PageProps) => (
  <>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
)

export default NotFoundPage

export const Head = (props: HeadProps) => {
  return <SEO {...props} title={'404: Not found'} />
}
