import React, { Component } from 'react'
import '../layouts/index.js'
import '../layouts/metaData.js'
import { Link } from 'gatsby'
import MetaTags from 'react-meta-tags'
import Favicon from '../images/favicon.png'

import MetaInfo from '../components/MetaInfo'

export default class NewMediaClubSite extends Component {
  _isMounted = false

  componentDidMount() {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = false
  }
  render() {
    let color = '#00141B'
    let colorWhite = '#ffffff'

    return (
      <div>
        <MetaTags>
          <title>New Media Club Site</title>
          <link rel="icon" href={Favicon} type="image/x-icon" />
          <MetaInfo />
        </MetaTags>

        <div className="App noScrollBehavior">
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
          <div className="wegmansHero newmediaclubsiteHero bsideProjectHeroContainer">
            <div className="bsideheroText ">
              <Link to="/bside">
                <h3
                  className="hoverCursor"
                  style={{
                    color: colorWhite,
                  }}
                >
                  <div className="backArrow"></div>back to b-side projects
                </h3>
              </Link>
              <h1
                style={{
                  color: colorWhite,
                }}
              >
                New Media Club Site Design and Code
              </h1>
              <p
                style={{
                  color: colorWhite,
                }}
              >
                As the webmaster of the New Media Club I was tasked with
                redesigning and consequently reimplementing the code to get it
                all to come together.
              </p>
            </div>
          </div>
          <div className="wegmansWrapper ">
            <div
              className="wegmansBrief wegmansFullWidth"
              style={{
                backgroundColor: color,
              }}
            >
              <div
                className="leftTag"
                style={{
                  backgroundColor: color,
                }}
              >
                WHAT'S UP
              </div>
              <div className="rightDescription">
                <p>
                  The original New Media Club (NMC) site was a single page
                  application built on Gatsby by the previous webmaster Jacob
                  Frank (
                  <a
                    href="https://www.jacobdfrank.com/"
                    rel="noreferer noopener"
                    target="_blank"
                    className="jakefrank"
                  >
                    jacobdfrank.com
                  </a>
                  ). When I got added as the new webmaster I was asked to expand
                  the site to include features such as mentor and alumni
                  galleries as well as a resources page to help new students get
                  started in design. To do this I had to scrap a lot of the
                  original code and implement new features like JSON populatino
                  for events and profile cards.
                </p>
              </div>
            </div>

            <div className="leftTagContainer leftTagContainerFix wegmansFullWidth">
              <div
                className="leftTag leftTagWithBg"
                style={{
                  backgroundColor: color,
                }}
              >
                TOOLS
              </div>
              <div className="rightDescriptionWhite">
                <div className="rightDescriptionImage">
                  <img
                    src={require('./../images/bsidePhotos/newmediaclub1.jpg')}
                    alt="project"
                    loading="lazy"
                  />
                </div>
                <div
                  className="rightDescriptionTitle"
                  style={{
                    color: color,
                  }}
                >
                  Gatsby, React, Figma
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  I had worked on the Thought At Work design conference site a
                  year prior to aid in the design and code so I had a little
                  experience in React and the static site generator Gatsby.
                  Figma was used for the designs for each page, allowing me to
                  collaborate and recieve feedback from the other members of the
                  NMC Eboard.
                </p>
                <p
                  style={{
                    color: color,
                  }}
                >
                  For the kinect visual this was a much simpler problem to
                  solve, I used a Version 2 Kinect and the Open Kinect library
                  from Daniel Shiffman in Processing to make it come to life.
                </p>
              </div>
            </div>

            <div className="leftTagContainer leftTagContainerFix wegmansFullWidth">
              <div
                className="leftTag leftTagWithBg"
                style={{
                  backgroundColor: color,
                }}
              >
                CHALLENGES
              </div>
              <div className="rightDescriptionWhite">
                <div className="rightDescriptionImage">
                  <img
                    src={require('./../images/bsidePhotos/newmediaclub2.jpg')}
                    alt="project"
                    loading="lazy"
                  />
                </div>
                <div
                  className="rightDescriptionTitle"
                  style={{
                    color: color,
                  }}
                >
                  User Population
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  This was the biggest web project I did alone. To make it easy
                  for future webmasters I wanted to make it as autonomous as I
                  could. JSON was implemented to minimize the HTML required
                  making markdown easier to read and it let my update user
                  profiles easily as I could make edits in excel or directly in
                  the JSON document for quick updates. We had over 50 combines
                  alumni and mentors so having a speedy was of doing this cuts
                  down significantly on time costs. But I had never done
                  anything like this before so a lot of googling was required
                  initially to figure out exactly what I was doing.
                </p>
              </div>
              <div className="rightDescriptionWhite">
                <div
                  className="rightDescriptionTitle"
                  style={{
                    color: color,
                  }}
                >
                  Image Optimization
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  This was very important because there are a lot of user
                  profile pictures. Luckily I have a lot of experience in image
                  optimization so this was not exeptionally challenging but
                  still important to cover. Each image is twice the resolution
                  of their intended size in the web. This is so they can be
                  optimized much more harshly and still retain quality for high
                  DPI screens and low file sizes. Using the mac app ImageOptim
                  helped automate this process. Also a little after creating the
                  site lazy loading was added to the HTML specifications and
                  because everything was already being loaded using Reacts
                  components I only had one line to add to make everything load
                  lazy increasing load times drastically while saving data by
                  not loading unseen images.
                </p>
              </div>

              <div className="rightDescriptionWhite">
                <div className="rightDescriptionImage">
                  <img
                    src={require('./../images/bsidePhotos/newmediaclub3.jpg')}
                    alt="project"
                    loading="lazy"
                  />
                </div>
                <div
                  className="rightDescriptionTitle"
                  style={{
                    color: color,
                  }}
                >
                  Sorting
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  Another challenge was when I had to come up with a way to sort
                  everyone into their own design categories. There were multiple
                  layers to the sort that was, are they an alumni or a mentor
                  and do they fit the selected filter option. Luckily I was able
                  to use the titles in the JSON document to sort them.
                </p>
              </div>
            </div>

            <div className="endproductContainer wegmansFullWidth">
              <a
                href="http://newmediaclub.rit.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="processsidebButton">
                  <span>CHECK IT OUT!</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
