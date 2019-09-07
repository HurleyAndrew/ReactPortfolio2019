import React, { Component } from 'react'
import '../layouts/index.js'
import '../layouts/metaData.js'
import Navigation from './../components/Navigation'
import lineSeparator from './../assets/darkLineSeparator.svg'
import threepigsOne from './../assets/threepigsOne.svg'
import threepigsTwo from './../assets/threepigsTwo.svg'
import threepigsThree from './../assets/threepigsThree.svg'
export default class IndexPage extends Component {
  render() {
    return (
      <div>
        {/* <MetaTags>
          <title>Home</title>
          <meta name="google" content="notranslate" />
        </MetaTags>

        <Navigation page={'home'} /> */}
        <div className="App">
          <div className="wrapper">
            <Navigation />
            <div className="projectArticleContainer">
              <div className="articleHeroContainer">
                <div className="articleHeroTitleContainer">
                  <div className="articleHeroTitle">
                    The Three<br></br> Little Pigs
                  </div>
                  <div className="articleHeroBody">
                    In addition to viewing new alerts, users can also return to
                    past alerts to view the weather event history for a region.
                  </div>
                </div>
                <img
                  className="articleHeroImage"
                  src={__PATH_PREFIX__ + threepigsOne}
                  alt={threepigsOne}
                />
              </div>
              <img
                className="lightLineSeparator"
                src={__PATH_PREFIX__ + lineSeparator}
                alt={threepigsOne}
              ></img>
              <div className="middleAlignedSection">
                <div className="sectionBlurbLeft">
                  <div className="blurbTitle">Weather Alert History</div>
                  <div className="blurbBody">
                    In addition to viewing new alerts, users can also return to
                    past alerts to view the weather event history for a region.
                  </div>
                </div>
                <img
                  className="sectionImage"
                  src={__PATH_PREFIX__ + threepigsTwo}
                  alt={threepigsOne}
                />
              </div>
              <img
                className="lightLineSeparator"
                src={__PATH_PREFIX__ + lineSeparator}
                alt={threepigsOne}
              ></img>
              <div className="middleAlignedSection">
                <img
                  className="sectionImage"
                  src={__PATH_PREFIX__ + threepigsTwo}
                  alt={threepigsOne}
                />
                <div className="sectionBlurbRight">
                  <div className="blurbTitle">Weather Alert History</div>
                  <div className="blurbBody">
                    In addition to viewing new alerts, users can also return to
                    past alerts to view the weather event history for a region.
                  </div>
                </div>
              </div>
              <img
                className="lightLineSeparator"
                src={__PATH_PREFIX__ + lineSeparator}
                alt={threepigsOne}
              ></img>
              <img
                className="lightLineSeparator"
                src={__PATH_PREFIX__ + lineSeparator}
                alt={threepigsOne}
              ></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
