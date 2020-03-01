import React, { Component } from 'react'
import '../layouts/index.js'
import '../layouts/metaData.js'
import { Link } from 'gatsby'
import MetaTags from 'react-meta-tags'
import Favicon from '../images/favicon.png'
import heroVideo from '../images/bsidePhotos/herovideos/threelittlepigsHero.mp4'
import MetaInfo from '../components/MetaInfo'

export default class ThreeLittlePigs extends Component {
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
          <title>Three Little Pigs</title>
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

          <video
            className="heroTopVideoSource"
            playsInline
            autoPlay
            muted
            loop
            poster={require('./../images/bsidePhotos/posters/threelittlepigs.jpg')}
          >
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
                Interactive Storytelling Three Little Pigs
              </h1>
              <p
                style={{
                  color: colorWhite,
                }}
              >
                A childrens story told in a more meaningful and visual way
                allowing users to get engaged in a classic fairytale.
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
                  This web page was made in an effort to make childrens stories
                  more engaging and interactive to the user. This is the story
                  of the three little pigs and features a game like experience.
                  It was created mostly with vanilla javascript and anime.js.
                </p>
              </div>
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
                  src={require('./../images/bsidePhotos/threelittlepigs1.jpg')}
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
                The Tale of Javascript
              </div>
              <p
                style={{
                  color: color,
                }}
              >
                The app was made entirely in javascript and used a little of the
                anime.js framework to aid in animation. The intial designs used
                figma to create composition, block out story, and for asset
                exporting.
              </p>
            </div>

            <div className="leftTagContainer leftTagContainerFix wegmansFullWidth">
              <div className="rightDescriptionWhite">
                <div className="rightDescriptionImage">
                  <img
                    src={require('./../images/bsidePhotos/threelittlepigs2.jpg')}
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
                  He Huffed and He Puffed
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  Making this was a lot of fun because it was almost all custom
                  code that was like solving a bunch of little puzzles to get
                  the giant puzzle completed. The story includes each pig and
                  thei battle with the big bad wolf. Users can put together each
                  pigs home while also getting the chance to be the wolf by
                  knocking down their homes.
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
                    src={require('./../images/bsidePhotos/threelittlepigs3.jpg')}
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
                  Snap, Drag, Drop
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  When working on this I really could not find any good way to
                  implement drag and drop that would snap to certain targets
                  both while it is being dragged and after it has been dropped.
                  This required that things could be removed from what they have
                  been snapped to, snapping would happen only on the right
                  object and that they would snap only when they are in range of
                  a target. This required me to make my own drag and drop method
                  that accomplished this. It works pretty much on if statements
                  that determine wether certain coordinates line up and updating
                  the coordinates of the dragged item to update when is taken
                  off the target.
                </p>
              </div>

              <div className="leftTagContainer leftTagContainerFix leftTagContainer leftTagContainerFixFix wegmansFullWidth">
                <div className="leftTag viewmoreProjects">END PRODUCT</div>
              </div>
              <div className="endproductContainer wegmansFullWidth">
                <a
                  href="https://dansegliode.github.io/threepigs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="processsidebButton">
                    <span>TRY IT OUT!</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
