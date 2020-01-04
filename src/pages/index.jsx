import React, { Component } from 'react'
import '../layouts/index.js'
import '../layouts/metaData.js'
import Navigation from './../components/Navigation'
import ProjectNavigation from './../components/ProjectNavigation'
import video from './../images/webMtest.webm'
import image from './../images/heroFallback.png'
import MetaTags from 'react-meta-tags'

export default class IndexPage extends Component {
  _isMounted = false

  constructor(props) {
    super(props)
    this.state = {
      randomWord: 'Woodworker',
    }
  }

  componentDidMount() {
    this._isMounted = true
    this.setState({
      randomWord: 'Woodworker',
    })
  }

  componentWillUnmount() {
    this._isMounted = false
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

    setTimeout(() => {
      this.setState({
        randomWord: randomWork[Math.floor(Math.random() * randomWork.length)],
      })
    }, 2500)

    return (
      <div>
        <MetaTags>
          <title>Home</title>
        </MetaTags>

        <div className="App">
          <div className="wrapper">
            <div className="homeHeroContainer wegmansWrapper">
              <div className="mobiusHero"></div>

              <div className="homeTextContainer">
                <div className="heyDiv">Hey!</div>
                <div className="homePara">
                  My name is <b>Andrew Hurley</b> and I am a{' '}
                  <b>Product Designer</b> who loves designing <b>intuitive</b>{' '}
                  and <b>unique experiences</b> for users.
                </div>
                <div className="homePara">
                  My free time can consist of activities such as{' '}
                  <b>woodworking</b>,<b>rendering</b>, <b>hiking</b>, and{' '}
                  <b>dog petting</b>.
                </div>
                <div className="homeButtons">
                  <a href="#projects" className="Button viewProjectsButton">
                    <div>CHECK ME OUT!</div>
                  </a>
                  <a
                    href="https://www.dropbox.com/s/emz1m7f19l4mmnp/Resume2020Hurley.pdf?dl=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Button resumeButton"
                  >
                    <div>RESUME</div>
                  </a>
                </div>
              </div>
            </div>
            <ProjectNavigation key={'projectnav1'} />
          </div>
        </div>
      </div>
    )
  }
}
