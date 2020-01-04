import React from 'react'
import projectsList from '../projectsList.json'
import Link from 'gatsby-link'

class ProjectPreview extends React.Component {
  constructor(props) {
    super(props)
    this.count = this.props.count
  }

  render() {
    let imageURL = './images/' + projectsList.Projects[this.props.count].image

    function createElement(prop, link, color) {
      if (prop === 'internal') {
        return (
          <Link className="" to={link}>
            <div className="Button projectButton">
              <span>Check It Out</span>
            </div>
          </Link>
        )
      } else {
        return (
          <a className="" href={link} target="_blank" rel="noopener noreferrer">
            <div className="Button projectButton">
              <span>Check It Out</span>
            </div>
          </a>
        )
      }
    }
    return (
      <div className="projectAlign ">
        <div className="projectContainer wegmansWrapper">
          <div className="projectImage">
            <img
              className="projectImage"
              src={require('./../images/' +
                projectsList.Projects[this.props.count].image)}
              alt={imageURL}
            />
          </div>

          <div className="projectTextContainer">
            <div className="projectDate">
              {projectsList.Projects[this.props.count].date}
            </div>
            <div className="projectTitle">
              {projectsList.Projects[this.props.count].title}
            </div>
            <div className="projectInfo">
              {projectsList.Projects[this.props.count].info}
            </div>

            {createElement(
              projectsList.Projects[this.props.count].linkType,
              projectsList.Projects[this.props.count].link,
              ' #' + projectsList.Projects[this.props.count].color
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default ProjectPreview
