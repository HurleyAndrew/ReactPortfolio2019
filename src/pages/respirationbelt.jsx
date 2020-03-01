import React, { Component } from 'react'
import '../layouts/index.js'
import '../layouts/metaData.js'
import { Link } from 'gatsby'
import MetaTags from 'react-meta-tags'
import Favicon from '../images/favicon.png'
import heroVideo from '../images/bsidePhotos/herovideos/respirationbeltHero.mp4'
import MetaInfo from '../components/MetaInfo'

export default class RespirationBelt extends Component {
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
          <title>Respiration Belt and Visualization</title>
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

          <video className="heroTopVideoSource" playsInline autoPlay muted loop>
            <source src={heroVideo} type="video/mp4" />
          </video>

          <div className="wegmansHero  bsideProjectHeroContainer">
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
                Respiration Belt and Kinect Visualization
              </h1>
              <p
                style={{
                  color: colorWhite,
                }}
              >
                The two major parts of my capstone project, the respiration belt
                used to analyze breathing patterns on users and a visualization
                that greets visitors of the exhibit as they walk in.
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
                  The engineering behind my capstone project for New Media
                  Design. This is still in progress and will be exhibited at the
                  Imagine RIT creativity fair on April 25th. I am working on all
                  aspects of this project from design to code to creating the
                  physical devices. It is where all my skills get a chance to
                  shine. Our capstone project is titles Oasis and it is a
                  breathing meditation exhibit where visitors perform a
                  breathing exercise while wearing out belt so we can provide
                  visual feedback in the form of generative art in an effort to
                  de-stress and show how easy and enjoyable it is to meditate at
                  home.
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
                    src={require('./../images/bsidePhotos/respiration1.jpg')}
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
                  Pins and Needles
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  To solve the problem of a physical device that can analyze a
                  users breathing I first tried just buying a device to do it
                  for us. But everything that I found ended up being hundreds of
                  dollars. So I made my own, the total cost ended up being
                  around $30 per belt for the fabric, elastic, and circuitry.
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
                THE BELT
              </div>
              <div className="rightDescriptionWhite">
                <div className="rightDescriptionImage">
                  <img
                    src={require('./../images/bsidePhotos/respiration2.jpg')}
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
                  You Didn’t Know Fashion Till Now
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  There have been a couple iterations on the belt. First
                  starting out as wires and a sensor taped to my chest then 5
                  strips of duct tape folded and tied around my chest and
                  finally a sleek polyester cotton blend fabric belt with a
                  comfortable foam body. The final belt was hand sewn backwards
                  and then reversed to hide the stitching. A piece of foam was
                  cut and channels for the wires added so it could be as compact
                  as possible. Future updates will include a better adjustment
                  mechanism and our logo over the glowing LED in the front of
                  the belt.
                </p>
              </div>
              <div className="rightDescriptionWhite">
                <div className="rightDescriptionImage">
                  <img
                    src={require('./../images/bsidePhotos/respiration3.jpg')}
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
                  David and Goliath
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  The first version used an Arduino Uno and a hand braided wire
                  tethered to it to transmit data. But that was obviously way
                  too bulky and quite unsightly to the user. So I opted for the
                  smaller Adafruit Flora board with potential expansion to
                  bluetooth in the future so no thethers would be needed an dit
                  could be a standalone device powered by a single lithium 5
                  volt battery. The issue currently is creating the desktop
                  application to communicate with it in the time frame. But
                  upgrading to the tiny Flora I was able to create an extremely
                  compact device with no way of telling there are any wired or
                  circuit boards involved when you wear it.
                </p>
              </div>

              <div className="rightDescriptionWhite">
                <div className="rightDescriptionImage">
                  <img
                    src={require('./../images/bsidePhotos/respiration6.jpg')}
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
                  *inhales*
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  The respiration belt controls a p5.js sketch that is behind
                  visual instructions for the user to follow during the
                  breathing meditation. There is a "personality" quiz in the
                  beginning that determines the properties of each visual and we
                  hope this helps to make every visual feel personal to the
                  user.
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
                VISUALIZATION
              </div>
              <div className="rightDescriptionWhite">
                <div className="rightDescriptionImage">
                  <img
                    src={require('./../images/bsidePhotos/respiration4.jpg')}
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
                  Pretty Lights
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  The intention for this is to create a barrier between
                  individuals performing the breathing exercise and those
                  walking around outside the room. It also acts as an eye
                  catching display that those walking past will stop to look at
                  and hopefully interact with. It was made with Processing and
                  the Version 2 of the Kinect, taking only certain depth points
                  which indicate a person and displaying them as if looking into
                  a digital mirror.
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
                    src={require('./../images/bsidePhotos/respiration5.jpg')}
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
                  Wait, how does that work?
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  A lot of trial and error was had, especially for the belt. I
                  started by sending data from the belt directly to Processing
                  to create the visuals. But the functionality of processing was
                  lacking when it came to UI and interactions. So I had to
                  figure out how to pass information from the arduino to P5.js
                  the web version of Processing. I also needed to come up with a
                  way to standardize the information coming from the belt. When
                  users would use it their size and belt tightness would vary
                  greatly. To get around this I set up a calibration section to
                  the application that set low and high thresholds of chest
                  expansion and then mapped those valued to be inclusive of a 0
                  to 1000 range so we knew any data we got would be between
                  those two numbers.
                </p>
                <p
                  style={{
                    color: color,
                  }}
                >
                  On the right you see the code for the kinect visual. The
                  challenge here was understanding how it was working and
                  optimize it to run at 60FPS with very little dropped frames
                  especially when a lot of people stood infront of it. This
                  involved throwing out extraneous data and flattening the three
                  dimensional depth array to a two dimensional one so less
                  calculations were needed.
                </p>
              </div>

              <div className="leftTagContainer leftTagContainerFix leftTagContainer leftTagContainerFixFix wegmansFullWidth">
                <div className="leftTag  viewmoreProjects">END PRODUCT</div>
              </div>

              <div className="endproductContainer wegmansFullWidth">
                <div className="processsidebButton">
                  <a
                    href="https://oasis.cad.rit.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>CHECK OUT OASIS</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
