import React from 'react'
import PropTypes from 'prop-types'
// import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Favicon from '../images/favicon.png'
import Social from '../images/social.jpg'

import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
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
