import React from 'react'
import upArrow from './../assets/navUpArrow.svg'
import downArrow from './../assets/navDownArrow.svg'
import ProjectPreview from './ProjectPreview'

let maxCount = 3
class ProjectNavigation extends React.Component {
  constructor(props) {
    super()
    this.state = {
      count: 0,
      tags: 0,
      title: 0,
      date: 0,
      link: 0,
      isAnimating: false,
    }
  }

  animateProject() {
    console.log('hello')
  }

  incrementCounter = () => {
    if (this.state.count === maxCount) {
      this.animateProject()
      this.setState({
        count: 0,
      })
    }
    if (this.state.count < maxCount) {
      this.animateProject()
      this.setState({
        count: this.state.count + 1,
      })
    }
  }

  decrementCounter = () => {
    if (this.state.count === 0) {
      this.animateProject()
      this.setState({
        count: maxCount,
      })
    }
    if (this.state.count > 0) {
      this.animateProject()
      this.setState({
        count: this.state.count - 1,
      })
    }
  }
  handleKeypress = event => {
    if (event.key === 'Enter') {
      console.log('enter press here! ')
    } else if (event.key === 'a') {
      console.log('A PRessed')
    }
  }
  render() {
    let { count } = this.state
    let { isAnimating } = this.state.isAnimating

    return (
      <div className="projectNavAndPreview">
        <div
          className={`projectNavigation ${
            isAnimating ? ' projectAnimation' : ' projectAnimation'
          }`}
        >
          <div>
            <div className="buttonContainer" onClick={this.incrementCounter}>
              <img src={upArrow} className="arrowButton" alt="up arrow" />
            </div>
          </div>

          <div className="pageCounter">
            {count}/{maxCount}
          </div>
          <div>
            <div className="buttonContainer" onClick={this.decrementCounter}>
              <img
                src={downArrow}
                className="arrowButton downArrow"
                alt="down arrow"
              />
            </div>
          </div>
        </div>
        <ProjectPreview
          count={count}
          tags={this.tags}
          title={this.title}
          date={this.date}
          link={this.link}
        />
      </div>
    )
  }
}
export default ProjectNavigation
