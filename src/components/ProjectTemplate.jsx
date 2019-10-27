import React from 'react'
import SymbiosisJson from '../abcofsymbiosis.json'
import Link from 'gatsby-link'
import Navigation from '../components/Navigation'
class ProjectTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.count = this.props.count
    this.jsonLink = this.props.jsonLink
  }

  render() {
    // let imageURL = './images/' + data.ProjectAttributes[3].image
    let json = require('../' + this.jsonLink + '.json')
    let data = json.ProjectAttributes
    console.log(data)
    return (
      <div>
        <div className="wrapper">
          <Navigation className="navComponent " color="#3556FF" />
          <div className="pageTitleBar">
            <div className="pageTitle">{data[0].title}</div>
          </div>
        </div>
        <div className="projectPageBackground">
          <div className="projectPageContainer">
            <div className="pageIntroRow">
              <div className="promptContainer">
                <h1>{data[1].title}</h1>
                <p>{data[1].text}</p>
              </div>
              <div className="overviewContainer">
                <h1>{data[2].title}</h1>
                <p>{data[2].text}</p>

                <h3>{data[2].bullet1}</h3>
                <h3>{data[2].bullet2}</h3>
                <h3>{data[2].bullet3}</h3>
              </div>
            </div>
            <div className="pageTriplePhotoRow">
              <div className="triplePhotoObject">
                <img
                  className="triplePhoto"
                  src={'./images/' + data[3].image}
                ></img>
                <h1>{data[3].title}</h1>
                <p>{data[3].text}</p>
              </div>
              <div className="triplePhotoObject">
                <img
                  className="triplePhoto"
                  src={'./images/' + data[4].image}
                ></img>
                <h1>{data[4].title}</h1>
                <p>{data[4].text}</p>
              </div>
              <div className="triplePhotoObject">
                <img
                  className="triplePhoto"
                  src={'./images/' + data[5].image}
                ></img>
                <h1>{data[5].title}</h1>
                <p>{data[5].text}</p>
              </div>
            </div>
            <div className="fullWidthImageContainer">
              <img
                src={'./images/' + data[6].image}
                className="fullWidthImage"
              ></img>
            </div>
            <div className="leftAlignedInfoPhoto">
              <h1>{data[7].title}</h1>
              <p>{data[7].text}</p>
              <img src={'./images/' + data[7].image}></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ProjectTemplate
