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
          <Link className="navProjectLink" to={link}>
            <div
              className="projectButtonContainer"
              style={{
                backgroundColor: color,
              }}
            >
              <span>Check It Out</span>
            </div>
          </Link>
        )
      } else {
        return (
          <a
            className="navProjectLink"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="projectButtonContainer"
              style={{
                backgroundColor: color,
              }}
            >
              <span>Check It Out</span>
            </div>
          </a>
        )
      }
    }
    return (
      <div className="projectAlign">
        <div className="projectContainer">
          <div className="projectImage">
            <img
              className="projectImage"
              src={require('./../images/' +
                projectsList.Projects[this.props.count].image)}
              alt={imageURL}
            />
          </div>
          <div>
            <div
              className="projectTextContainer"
              style={{
                borderColor:
                  ' #' + projectsList.Projects[this.props.count].color,
              }}
            >
              <div
                className="projectDate"
                style={{
                  color: '#' + projectsList.Projects[this.props.count].color,
                }}
              >
                {projectsList.Projects[this.props.count].date}
              </div>
              <div
                className="projectTitle"
                style={{
                  color: '#' + projectsList.Projects[this.props.count].color,
                }}
              >
                {projectsList.Projects[this.props.count].title}
              </div>
            </div>
            {createElement(
              projectsList.Projects[this.props.count].linkType,
              projectsList.Projects[this.props.count].link,
              ' #' + projectsList.Projects[this.props.count].color
            )}
          </div>
        </div>
        <div className="pageDividerLineContainer">
          <div
            className="dividerLine"
            style={{
              borderColor: '#3556ff',
            }}
          ></div>
        </div>
      </div>
    )
  }
}
export default ProjectPreview
