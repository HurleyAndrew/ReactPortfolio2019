import React, { Component } from 'react'
import '../layouts/index.js'
import '../layouts/metaData.js'
import Navigation from '../components/Navigation'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="wrapper">
            <Navigation className="navComponent projectsNav" />
            <div className="projectPageContainer"></div>
          </div>
        </div>
      </div>
    )
  }
}
