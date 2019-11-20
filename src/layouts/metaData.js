import React from 'react'
import PropTypes from 'prop-types'
import Favicon from '../images/favicon.jpg'
import Social from '../images/social.jpg'

import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
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
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="720" />
    <meta property="og:image:height" content="400" />
    <meta property="og:site_name" content="https://hurleyandrew.com/" />
    <meta property="og:url" content="https://hurleyandrew.com/" />

    <meta name="apple-mobile-web-app-capable" content="yes" />

    <meta itemprop="name" content="Andrew Hurley Product Designer" />
    <meta itemprop="description" content="Andrew Hurley Product Designer" />
    <meta itemprop="image" content="Andrew Hurley Product Designer" />

    <meta name="author" content="Andrew Hurley" />

    <title>Andrew Hurley</title>
    <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
    <link rel="icon" href={Favicon} type="image/x-icon" />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
