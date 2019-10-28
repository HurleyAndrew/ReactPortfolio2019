import React, { Component } from 'react'
import '../layouts/index.js'
import '../layouts/metaData.js'
import WoodworkingPhotos from '../woodworkingphotos.json'
import Navigation from '../components/Navigation'
import ProjectsAdvertisement from '../components/ProjectsAdvertisement'

class Woodworking extends Component {
  createElements = () => {
    let elementArray = []
    for (let index = 0; index < WoodworkingPhotos.Photos.length; index++) {
      elementArray.push(
        <img
          src={'./../images/' + WoodworkingPhotos.Photos[index].link}
          alt={'./../images/' + WoodworkingPhotos.Photos[index].link}
          className="D3Image"
        ></img>
      )
    }
    return elementArray
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="wrapper">
            <Navigation className="navComponent " color={'#DB5922'} />
            <div
              className="pageTitleBar"
              style={{
                backgroundColor: '#DB5922',
              }}
            >
              <div className="pageTitle">Woodworking</div>
            </div>
          </div>
          <div className="d3designPhotoContainer">{this.createElements()}</div>
          <ProjectsAdvertisement />
        </div>
      </div>
    )
  }
}
export default Woodworking
