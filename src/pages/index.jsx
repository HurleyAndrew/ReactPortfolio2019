import React, { Component } from 'react'
import '../layouts/index.js'
import '../layouts/metaData.js'
import Navigation from './../components/Navigation'
import ProjectNavigation from './../components/ProjectNavigation'
import video from './../images/heroVideo.mp4'
export default class IndexPage extends Component {
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
            <div className="homeTop">
              <div className="heroImage">
                {/* <iframe
                src={video}
                className="heroVideo"
                width="540"
                height="310"
              ></iframe> */}
              </div>
              <div className="heroAbout">
                <div className="heyitsmeContainer">
                  <div className="heyitsme">Hey it's me,</div>
                  <div className="meTitle">Andrew Hurley</div>
                </div>
                <div className="productDesignContainer">
                  <div className="productDesignContainerTitle">
                    Product Designer
                  </div>
                  <div className="productDesignContainerOtherJob">
                    and recreational<br></br>
                    <span>{randomWord}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="projectList">
            <div className="projectDividerLine">
              <p>Projects</p>
              <div></div>
            </div>
            <ProjectNavigation id={0} />
          </div>
          <Navigation className="navComponent" color="" />
        </div>

        <div className="downArrow"></div>
      </div>
    )
  }
}
