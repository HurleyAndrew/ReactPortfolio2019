import React from 'react'
import projectsList from '../projectsList.json'
import ProjectPreviewImage from './Members/ProjectPreviewImage.jsx'

class ProjectPreview extends React.Component {
  constructor(props) {
    super(props)
    this.count = this.props.count
  }

  render() {
    return (
      <div>
        <div className="projectContainer">
          <div className="projectInfoContainer">
            <div className="projectInfo">
              <div className="categoryContainer">
                <div className="category red">Product Design </div>
                <div className="category green">Prototyping</div>
                <div className="category blue">Motion Graphics</div>
              </div>
              <div className="title">
                {projectsList.Projects[this.props.count].title}
              </div>
              <div className="projectDate">
                {projectsList.Projects[this.props.count].date}
              </div>
            </div>
            <div className="enterButton">
              <div>enter</div>
            </div>
          </div>
          <ProjectPreviewImage
            image={projectsList.Projects[this.props.count].image}
          />
        </div>
      </div>
    )
  }
}
export default ProjectPreview
