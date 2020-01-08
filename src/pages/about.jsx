import React, { Component } from 'react'
import '../layouts/index.js'
import '../layouts/metaData.js'
import Navigation from '../components/Navigation'
import MetaTags from 'react-meta-tags'
export default class About extends Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>About</title>
        </MetaTags>

        <div className="App">
          <div className="wrapper">
            <Navigation className="navComponent " color={'#A2528A'} />
            <div className="homeHeroContainer wegmansWrapper whiteBg">
              <div className="aboutImageContainer"></div>
              <div className="homeTextContainer aboutContainer darkText">
                <div className="heyDiv darkText">Hey!</div>
                <div className="homePara">
                  My name is <b>Andrew Hurley</b> and I am a{' '}
                  <b>Product Designer</b> who loves designing <b>intuitive</b>{' '}
                  and <b>unique experiences</b> for users.
                </div>
                <div className="homePara">
                  I have spent the past 4 years at{' '}
                  <b>Rochester Institute of Technology</b> studying New Media
                  Design with an immersion in Communications and will be
                  graduating in <b>May 2020</b>.
                </div>
                <div className="homePara">
                  My free time can consist of activities such as{' '}
                  <b>woodworking</b>,<b>rendering</b>, <b>hiking</b>, and{' '}
                  <b>dog petting</b>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
