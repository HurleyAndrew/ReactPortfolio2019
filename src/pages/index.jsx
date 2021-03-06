import React, { Component } from 'react'
import '../layouts/index.js'
import '../layouts/metaData.js'
import ProjectNavigation from './../components/ProjectNavigation'
import MetaTags from 'react-meta-tags'
import Favicon from '../images/favicon.png'
import Social from '../images/social.jpg'
import Link from 'gatsby-link'

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Home</title>
          <meta name="google" content="notranslate" />
          <meta httpEquiv="Content-Language" content="en" />

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
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="https://hurleyandrew.com/" />
          <meta property="og:url" content="https://hurleyandrew.com/" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />

          <meta itemProp="name" content="Andrew Hurley Product Designer" />
          <meta
            itemProp="description"
            content="Andrew Hurley Product Designer"
          />
          <meta itemProp="image" content="Andrew Hurley Product Designer" />

          <meta name="author" content="Andrew Hurley" />

          <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
          <link rel="icon" href={Favicon} type="image/x-icon" />
        </MetaTags>

        <div className="App">
          <div className="sidesContainer">
            <div className="sides">
              <Link to={'/'}>
                <div>A-Side</div>
              </Link>{' '}
              <div className="sideLine"></div>{' '}
              <Link to={'/bside'}>
                <div>B-Side</div>
              </Link>
            </div>
          </div>
          <div className="backgroundDiv"></div>
          <div className="wrapper">
            <div className="homeHeroContainer wegmansWrapper">
              <div className="mobiusHero" loading="eager"></div>

              <div className="homeTextContainer">
                <div className="heyDiv">Hey!</div>
                <div className="homePara">
                  My name is{' '}
                  <Link to={'/about'}>
                    <b className="zigzag">Andrew Hurley</b>
                  </Link>{' '}
                  and I am a <b>Product Designer</b> who loves designing{' '}
                  <b>intuitive</b> and <b>unique experiences</b> for users.
                </div>
                <div className="homePara">
                  My free time consists of activities such as <b>woodworking</b>
                  , <b>rendering</b>, <b>hiking</b>, and <b>dog petting</b>.
                </div>
                <div className="homeButtons">
                  <a href="#projects" className="Button viewProjectsButton">
                    <div>CHECK ME OUT!</div>
                  </a>
                  <a
                    href="https://www.dropbox.com/s/emz1m7f19l4mmnp/Resume2020Hurley.pdf?dl=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Button resumeButton"
                  >
                    <div>RESUME</div>
                  </a>
                </div>
              </div>
            </div>
            <ProjectNavigation key={'projectnav1'} />
          </div>
        </div>
      </div>
    )
  }
}
