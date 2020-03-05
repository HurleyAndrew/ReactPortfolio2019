import React, { Component } from 'react'
import '../layouts/index.js'
import '../layouts/metaData.js'

import MetaTags from 'react-meta-tags'
import Favicon from '../images/favicon.png'
import Social from '../images/social.jpg'
import Link from 'gatsby-link'

export default class BSide extends Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>B-Side</title>
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
            <div className="sides darkText">
              <Link to={'/'}>
                <div>A-Side</div>
              </Link>{' '}
              <div className="sideLine darkBg"></div>{' '}
              <Link to={'/bside'}>
                <div>B-Side</div>
              </Link>
            </div>
          </div>

          <div className="wrapper">
            <div className="wegmansWrapper">
              <div className="wegmansHero bsideheroMargin">
                <h1>Welcome to the B-Side</h1>
                <p>
                  This is where the more programming and engineering oriented
                  side of me lives. Part hobby I have been able to implement my
                  skills into projects both personal and for school, helping
                  them go from screen to reality.
                </p>
              </div>
            </div>

            <div className="bsideProjects margin-bottom">
              <div className="rail">
                <Link to={'/threelittlepigs'}>
                  <div className="squareProject threepigs">
                    <div className="sidebprojecttextContainer ">
                      <div className="sidebprojectTags">Javascript</div>
                      <div className="sidebprojectTitle">Three Little Pigs</div>
                    </div>
                  </div>
                </Link>
                <Link to={'/woodworking'}>
                  <div className="squareProject woodworking">
                    <div className="sidebprojecttextContainer ">
                      <div className="sidebprojectTags">
                        Electronics, Woodworking, Bees
                      </div>
                      <div className="sidebprojectTitle">
                        Woodworking and Everything in Between
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={'/constellationbrands'}>
                  <div className="squareProject arexperience">
                    <div className="sidebprojecttextContainer ">
                      <div className="sidebprojectTags">
                        Node Programming, Spark AR
                      </div>
                      <div className="sidebprojectTitle">
                        Constellation Brands AR Experience
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="rail">
                <Link to={'/respirationbelt'}>
                  <div className="rectangleProject respirationbelt">
                    <div className="sidebprojecttextContainer ">
                      <div className="sidebprojectTags">
                        Electronics, Fabric, Creative Coding
                      </div>
                      <div className="sidebprojectTitle">
                        Respiration Belt and Kinect Visualization
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={'/newmediaclubsite'}>
                  <div className="squareProject nmcsite">
                    <div className="sidebprojecttextContainer ">
                      <div className="sidebprojectTags">
                        React, SCSS, Gatsby
                      </div>
                      <div className="sidebprojectTitle">NMC Club Site</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
