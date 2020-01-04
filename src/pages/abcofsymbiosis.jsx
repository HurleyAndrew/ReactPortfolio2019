import React, { Component } from 'react'
import '../layouts/index.js'
import '../layouts/metaData.js'
import Navigation from '../components/Navigation'
import { Link } from 'gatsby'
import MetaTags from 'react-meta-tags'
import Favicon from '../images/favicon.png'

import MetaInfo from '../components/MetaInfo'

export default class Abcofsymbiosis extends Component {
  _isMounted = false

  componentDidMount() {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = false
  }
  render() {
    let color = '#00141B'

    return (
      <div>
        <MetaTags>
          <title>ABC's of Symbiosis</title>
          <link rel="icon" href={Favicon} type="image/x-icon" />
          <MetaInfo />
        </MetaTags>

        <div className="App noScrollBehavior">
          <Navigation color={'#00141B'}></Navigation>
          <div className="wegmansWrapper">
            <div className="wegmansHero">
              <h3
                style={{
                  color: color,
                }}
              >
                Fall 2019
              </h3>
              <h1
                style={{
                  color: color,
                }}
              >
                ABC’s of Symbiosis
              </h1>
              <p
                style={{
                  color: color,
                }}
              >
                We were seperated into two groups of 9 for our Interactive 4
                project. We were tasked with creating a ABC book or other print
                media for children. Our group decided on the concept of pairing
                up creatures in nature that have symbiotic relationships. A
                symbiotic relationship is one where both creatures benefit from
                one another.
              </p>

              <div className="processButton">
                <a
                  href="http://students.miguelcardona.com/abcs-2019/symbiosis/andrew_hurley/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Process Deck</span>
                </a>
              </div>
            </div>
            <img
              className="wegmanHeroImage"
              src={require('../images/symbiosisImages/symbiosisHero.jpg')}
              alt="wegmans hero"
            />

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
                CONCEPT
              </div>
              <div className="rightDescription">
                <p>
                  The ABC’s of Symbiosis is a matching card game intended for
                  children ages 4 - 12 that helps reinforce cooperation and
                  introduce new and interesting concepts in a learning
                  environment.
                </p>
                <p>
                  The games works by having the teacher hand out one card per
                  student and asking them to find their symbiotic match. Each
                  card pair has a pre-determined color scheme and QR code that
                  helps students find their match. Once connected students can
                  see what each creature does and scan the QR code to learn more
                  about how they interact
                </p>
              </div>
            </div>

            <div className="leftTagContainer wegmansFullWidth">
              <div
                className="leftTag leftTagWithBg"
                style={{
                  backgroundColor: color,
                }}
              >
                LETTER DELEGATION
              </div>
              <div className="rightDescriptionWhite">
                <div className="rightDescriptionImage">
                  <img
                    src={require('../images/symbiosisImages/symbiosis1.jpg')}
                    alt="project"
                  />
                </div>
                <div
                  className="rightDescriptionTitle"
                  style={{
                    color: color,
                  }}
                >
                  After receiving our letters we started researching pairs.
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  Letters were handed out randomly and each person got 3 to
                  create content for. While one person got two cards and the
                  cover to create.
                </p>
                <p
                  style={{
                    color: color,
                  }}
                >
                  I got the letters S, U, and H. Their pairs go, S is for Sea
                  Cucumber which pairs with Imperial Shrimp. The U is for Sea
                  Urchin which pairs with Carrier Crab. Finally the H is for
                  Human which goes with Bacteria.
                </p>
              </div>
            </div>

            <div className="leftTagContainer wegmansFullWidth">
              <div
                className="leftTag leftTagWithBg"
                style={{
                  backgroundColor: color,
                }}
              >
                ITERATIONS
              </div>
              <div className="rightDescriptionWhite">
                <div className="rightDescriptionImage">
                  <img
                    src={require('../images/symbiosisImages/symbiosis2.jpg')}
                    alt="project"
                  />
                </div>
                <div
                  className="rightDescriptionTitle"
                  style={{
                    color: color,
                  }}
                >
                  Anthropromorphized letters.
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  These are the initial iterations of each letter. I decided
                  early on to, instead of putting each letter in plain text onto
                  the card, I would use each character as the letter. With the
                  human I makind it in 2D but went to 3D after completing the
                  sea urchin because I liked how cohesive they were looking.
                  Like those fantasy card games whose main illustration is the
                  main image. The sea urchin changed the most, it was an
                  experiement where I first tried adding character to a letter.
                </p>
              </div>
            </div>

            {/* start of the tri image row */}
            <div className="leftTagContainer wegmansFullWidth">
              <div
                className="leftTag leftTagWithBg"
                style={{
                  backgroundColor: color,
                }}
              >
                FINAL CARDS
              </div>
            </div>
            <div className="wegmansTriRow wegmansFullWidth">
              <div className="wegmansTriItemFirst ">
                <img
                  src={require('../images/symbiosisImages/symbiosis3.jpg')}
                  alt="project"
                />
                <h1
                  style={{
                    color: color,
                  }}
                >
                  Sea Cucumber
                </h1>
                <p
                  style={{
                    color: color,
                  }}
                >
                  This is the final version of the card. For this one I went
                  with a scarier tone to mix things up and give a more fantasy
                  card game vibe to it instead of an more linear art style like
                  Go Fish or UNO.
                </p>
              </div>

              <div className="wegmansTriItemSecond ">
                <img
                  src={require('../images/symbiosisImages/symbiosis4.jpg')}
                  alt="project"
                />
                <h1
                  style={{
                    color: color,
                  }}
                >
                  Human
                </h1>
                <p
                  style={{
                    color: color,
                  }}
                >
                  For each of these cards I also wanted to put them somewhere
                  signature and similar to their pair. So the human is placed in
                  the gym to show that they are healthy just like how the
                  bacteria is helpful to the human.
                </p>
              </div>

              <div className="wegmansTriItemThird ">
                <img
                  src={require('../images/symbiosisImages/symbiosis5.jpg')}
                  alt="project"
                />
                <h1
                  style={{
                    color: color,
                  }}
                >
                  Sea Urchin
                </h1>
                <p
                  style={{
                    color: color,
                  }}
                >
                  The enviroment for the sea urchin is the sea anenome an area
                  the carrier crab can be found. It also is a great abstraction
                  from where the sea urchin is found.
                </p>
              </div>
            </div>

            <div className="leftTagContainer wegmansFullWidth">
              <div
                className="leftTag leftTagWithBg"
                style={{
                  backgroundColor: color,
                }}
              >
                CLOSE UPS
              </div>
              <div className="rightDescriptionWhite">
                <div className="rightDescriptionImage">
                  <img
                    src={require('../images/symbiosisImages/symbiosis6.jpg')}
                    alt="project"
                  />
                </div>
              </div>
            </div>

            <div className="leftTagContainer wegmansFullWidth">
              <div className="leftTag leftTagWithBg viewmoreProjects">
                PROTOTYPE
              </div>
            </div>

            <div className="wegmansFullWidth weatherAnimationContainer">
              <video width="320" height="240" controls className="wegmansDemo">
                <source
                  src={require('../images/symbiosisImages/symbiosisDemo.mp4')}
                  type="video/mp4"
                ></source>
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="leftTagContainer wegmansFullWidth">
              <div
                className="leftTag leftTagWithBg"
                style={{
                  backgroundColor: color,
                }}
              >
                WOODEN CASE
              </div>
              <div className="rightDescriptionWhite">
                <div className="rightDescriptionImage">
                  <img
                    src={require('../images/symbiosisImages/symbiosis7.jpg')}
                    alt="project"
                  />
                </div>
                <div
                  className="rightDescriptionTitle"
                  style={{
                    color: color,
                  }}
                >
                  I also made a box!
                </div>
                <p
                  style={{
                    color: color,
                  }}
                >
                  I do woodworking as a hobby and whenever I go home on breaks I
                  spend all my time working in my lil’ shop. While I was home I
                  made a box for the deck of cards out of leopard wood and
                  bamboo to really complete the project.
                </p>
              </div>
            </div>
          </div>

          <div className="leftTagContainer wegmansFullWidth">
            <div className="leftTag leftTagWithBg viewmoreProjects">
              VIEW MORE PROJECTS
            </div>
          </div>

          <div className="projectAdvertisementContainer">
            <div>
              <a href="https://www.behance.net/gallery/74068673/Chore-Management">
                <div className="advertisementItem">
                  <img
                    src={require('../images/advertisement/choreAd.jpg')}
                    alt="project"
                    className=""
                  />
                  <p>Chore Management</p>
                </div>
              </a>
              <Link to={'/d3design/'}>
                <div className="advertisementItem">
                  <img
                    src={require('../images/advertisement/d3designAd.jpg')}
                    alt="project"
                    className=""
                  />
                  <p>3D Design</p>
                </div>
              </Link>
              <Link to={'/coincare/'}>
                <div className="advertisementItem">
                  <img
                    src={require('../images/advertisement/coincareAd.jpg')}
                    alt="project"
                    className=""
                  />
                  <p>Coin Care</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
