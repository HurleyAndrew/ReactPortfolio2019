import React from 'react'
import PropTypes from 'prop-types'
// import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Favicon from '../images/favicon.png'
import Social from '../images/social.jpg'
import favicon16 from '../images/favicon16.png'
import favicon32 from '../images/favicon32.png'
import favicon64 from '../images/favicon64.png'

import './index.scss'
console.log(Favicon)
console.log(Social)
const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      meta={[
        {
          name: 'description',
          content: 'Andrew Hurley - Product Designer',
        },
        {
          name: 'keywords',
          content:
            'designer, product designer, visual designer, rochester institute of technology, andrew hurley, visual designer, motion graphics, 3d design',
        },
      ]}
      link={[
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: `${favicon16}`,
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: `${favicon32}`,
        },
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon64}` },
      ]}
    >
      <meta name="google" content="notranslate" />
      <meta http-equiv="Content-Language" content="en" />

      <meta
        name="description"
        content="Portfolio Website for Andrew Hurley - Product Designer"
      />

      <meta property="og:title" content="Andrew Hurley" />
      <meta
        property="og:description"
        content="Portfolio Website for Andrew Hurley - Product Designer"
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={Social} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="https://hurleyandrew.com/" />
      <meta property="og:url" content="https://hurleyandrew.com/" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

      <meta name="author" content="Andrew Hurley" />

      <title>Andrew Hurley</title>

      <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
      <link rel="icon" href={Favicon} type="image/x-icon" />
    </Helmet>
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
