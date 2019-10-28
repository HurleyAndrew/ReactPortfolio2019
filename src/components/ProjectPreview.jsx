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

    return (
      <div>
        <div className="projectContainer">
          <div className="projectImage">
            <img className="projectImage" src={imageURL} alt={imageURL} />
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
            <Link
              className="navProjectLink"
              to={'/' + projectsList.Projects[this.props.count].link + '/'}
            >
              <div
                className="projectButtonContainer"
                style={{
                  backgroundColor:
                    ' #' + projectsList.Projects[this.props.count].color,
                }}
              >
                <span>Check It Out</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="pageDividerLineContainer">
          <div
            className="dividerLine"
            style={{
              borderColor: ' #' + projectsList.Projects[this.props.count].color,
            }}
          ></div>
        </div>
      </div>
    )
  }
}
export default ProjectPreview
