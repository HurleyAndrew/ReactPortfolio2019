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
      id: 0,
    }
  }

  //for each element in json file create html
  createElements = () => {
    let elementArray = []
    let id = 0
    for (let index = 0; index < projectCount; index++) {
      id = id + 1

      elementArray.push(
        <div>
          <ProjectPreview
            count={index}
            tags={this.tags}
            title={this.title}
            date={this.date}
            link={this.link}
            id={id}
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
