import React, { Component } from 'react'
import '../layouts/index.js'
import '../layouts/metaData.js'
import Navigation from '../components/Navigation'
import ProjectsAdvertisement from '../components/ProjectsAdvertisement'
import video from './../images/DemoReel.mp4'

export default class DemoReel extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="wrapper">
            <Navigation className="navComponent " color={'#A2528A'} />
            {/* <div
              className="pageTitleBar"
              style={{
                backgroundColor: '#A2528A',
              }}
            >
              <div className="pageTitle">Demo Reel</div>
            </div> */}
          </div>
          <div className="d3designPhotoContainer">
            <video className="demoReelVideo" controls>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <ProjectsAdvertisement />
        </div>
      </div>
    )
  }
}
