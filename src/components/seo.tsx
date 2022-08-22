import React from 'react'
import type { HeadProps } from 'gatsby'
import { useSiteMetadata } from '../providers/hooks/useSiteMetadata'

type Props = HeadProps & {
  children?: React.ReactNode
  title?: string
  description?: string
  ogImage?: string
  twitterImage?: string
}

export const SEO = ({
  location,
  params,
  data,
  pageContext,
  children,
  title,
  description,
  ogImage,
  twitterImage,
}: Props) => {
  const { siteMetadata } = useSiteMetadata()

  const meta = {
    author: siteMetadata.author,
    title: title ? `${title} | ${siteMetadata.title}` : siteMetadata.title,
    description: description || siteMetadata.description,
    url: `${siteMetadata.url}${location.pathname === '/' ? '' : location.pathname}`,
    ogImage: ogImage || siteMetadata.ogImage,
    twitterImage: twitterImage || siteMetadata.twitterImage,
  }

  return (
    <>
      <title>{meta.title}</title>
      <meta name={'description'} content={meta.description} />
      <meta property={'og:title'} content={meta.title} />
      <meta property={'og:description'} content={meta.description} />
      <meta property={'og:type'} content={'website'} />
      <meta property={'og:url'} content={meta.url} />
      <meta property={'og:image'} content={meta.ogImage} />
      <meta name={'twitter:title'} content={meta.title} />
      <meta name={'twitter:description'} content={meta.description} />
      <meta name={'twitter:card'} content={'summary_large_image'} />
      <meta name={'twitter:creator'} content={meta.author} />
      <meta name={'twitter:url'} content={meta.url} />
      <meta name={'twitter:image'} content={meta.twitterImage} />
      {children}
    </>
  )
}
