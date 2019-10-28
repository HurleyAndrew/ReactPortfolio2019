import React, { Component } from 'react'
import '../layouts/index.js'
import '../layouts/metaData.js'

import ProjectTemplate from '../components/ProjectTemplate'

export default class WegmansWeatherApplication extends Component {
  render() {
    return (
      <div>
        {/* <MetaTags>
          <title>Home</title>
          <meta name="google" content="notranslate" />
        </MetaTags>

        <Navigation page={'home'} /> */}
        <div className="App">
          <ProjectTemplate jsonLink="wegmansweatherapplication" />
        </div>
      </div>
    )
  }
}
