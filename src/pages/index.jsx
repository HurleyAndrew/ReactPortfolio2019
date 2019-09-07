import React, { Component } from 'react'
import '../layouts/index.js'
import '../layouts/metaData.js'
import ProjectNavigation from './../components/ProjectNavigation'
import Navigation from './../components/Navigation'
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
            <div className="mainProjects">
              <div className="projectPreviewContainer">
                <ProjectNavigation />
                {/* <img
              // src={linkplz}
              src={image}
              // src={this.state.url}
              // src={require(baseURL + `${imageLink}`)}
              // alt={require(`${imageLink}`)}
              className="projectImage"
            /> */}
                {/* <div className="projectPhoto" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
