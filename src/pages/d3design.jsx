import React, { Component } from 'react'
import '../layouts/index.js'
import '../layouts/metaData.js'
import D3Photos from '../d3photos.json'
import Navigation from '../components/Navigation'
import ProjectsAdvertisement from '../components/ProjectsAdvertisement'
import { Link } from 'gatsby'
import MetaTags from 'react-meta-tags'
import Favicon from '../images/favicon.png'
import ModalImage from 'react-modal-image'
class D3design extends Component {
  createElements = () => {
    let elementArray = []
    for (let index = 0; index < 12; index++) {
      elementArray.push(
        <div className="modalFix">
          <ModalImage
            className="D3Image"
            small={require('./../images/' + D3Photos.Photos[index].link)}
            large={require('./../images/' + D3Photos.Photos[index].link)}
            alt={D3Photos.Photos[index].alt}
          />
        </div>
        // <img
        //   src={require('./../images/' + D3Photos.Photos[index].link)}
        //   alt={'./../images/' + D3Photos.Photos[index].link}
        //   className="D3Image"
        // ></img>
      )
    }

    // elementArray.push(<div className="d3designDivider"></div>)

    for (let index = 12; index < 17; index++) {
      elementArray.push(
        // <img
        //   src={require('./../images/' + D3Photos.Photos[index].link)}
        //   alt={'./../images/' + D3Photos.Photos[index].link}
        //   className="D3ImageSquare"
        // ></img>
        <div className="modalFix">
          <ModalImage
            className="D3Image"
            small={require('./../images/' + D3Photos.Photos[index].link)}
            large={require('./../images/' + D3Photos.Photos[index].link)}
            alt={'./../images/' + D3Photos.Photos[index].alt}
          />
        </div>
      )
    }

    return elementArray
  }

  render() {
    return (
      <div>
        <MetaTags>
          <title>3D Design</title>
          <link rel="icon" href={Favicon} type="image/x-icon" />
        </MetaTags>
        <div className="App">
          <div className="wrapper">
            <Navigation className="navComponent " color={'#FFAF39'} />
            {/* <div
              className="pageTitleBar"
              style={{
                backgroundColor: '#FFAF39',
              }}
            >
              <div className="pageTitle">3D Design</div>
            </div> */}
          </div>
          <div className="d3designPhotoContainer">{this.createElements()}</div>
          <ProjectsAdvertisement />

          <div className="projectAdvertisementContainer">
            <div>
              <Link to={'/abcofsymbiosis/'}>
                <div className="advertisementItem">
                  <img
                    src={require('../images/advertisement/wegmansAd.jpg')}
                    alt="project"
                    className=""
                  />
                  <p>ABC's of Symbiosis</p>
                </div>
              </Link>
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
export default D3design
