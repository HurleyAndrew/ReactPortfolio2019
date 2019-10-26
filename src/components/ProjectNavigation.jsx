import React from 'react'

import ProjectPreview from './ProjectPreview'

const projectCount = 6

class ProjectNavigation extends React.Component {
  constructor(props) {
    super()
    this.state = {
      count: 0,
      tags: 0,
      title: 0,
      date: 0,
      link: 0,
    }
  }

  //for each element in json file create html
  createElements = () => {
    let { count } = this.state
    let elementArray = []
    for (let index = 0; index < projectCount; index++) {
      elementArray.push(
        <div>
          <ProjectPreview
            count={index}
            tags={this.tags}
            title={this.title}
            date={this.date}
            link={this.link}
          />
        </div>
      )
    }
    return elementArray
  }
  render() {
    return <div className="projectNavAndPreview">{this.createElements()}</div>
  }
}
export default ProjectNavigation
