import React, { Component } from 'react'
import '../layouts/index.js'
import '../layouts/metaData.js'
import D3Photos from '../d3photos.json'
import Navigation from '../components/Navigation'
import ProjectsAdvertisement from '../components/ProjectsAdvertisement'

class D3design extends Component {
  createElements = () => {
    let elementArray = []
    for (let index = 0; index < 12; index++) {
      elementArray.push(
        <img
          src={'./../images/' + D3Photos.Photos[index].link}
          alt={'./../images/' + D3Photos.Photos[index].link}
          className="D3Image"
        ></img>
      )
    }
    // elementArray.push(<div className="d3designDivider"></div>)

    for (let index = 12; index < 17; index++) {
      elementArray.push(
        <img
          src={'./../images/' + D3Photos.Photos[index].link}
          alt={'./../images/' + D3Photos.Photos[index].link}
          className="D3ImageSquare"
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
            <Navigation className="navComponent " color={'#FFAF39'} />
            <div
              className="pageTitleBar"
              style={{
                backgroundColor: '#FFAF39',
              }}
            >
              <div className="pageTitle">3D Design</div>
            </div>
          </div>
          <div className="d3designPhotoContainer">{this.createElements()}</div>
          <ProjectsAdvertisement />
        </div>
      </div>
    )
  }
}
export default D3design
