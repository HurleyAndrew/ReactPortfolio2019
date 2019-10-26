import React, { Component } from 'react'
import '../layouts/index.js'
import '../layouts/metaData.js'
import Navigation from '../components/Navigation'
import ProjectNavigation from '../components/ProjectNavigation'
import video from './../images/heroVideo.mp4'
export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomWord: 'Woodworker',
    }
  }

  render() {
    let randomWork = [
      'Woodworker',
      'Electrician',
      'Maker',
      'Dog Lover',
      'Hiker',
      'Photographer',
    ]
    let { randomWord } = this.state
    let randomNumber

    setTimeout(() => {
      this.setState({
        randomWord: randomWork[Math.floor(Math.random() * randomWork.length)],
      })
      // console.log('timerhit' + randomNumber)
      // console.log(randomWord)
    }, 2500)

    return (
      <div>
        {/* <MetaTags>
          <title>Home</title>
          <meta name="google" content="notranslate" />
        </MetaTags>

        <Navigation page={'home'} /> */}
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
