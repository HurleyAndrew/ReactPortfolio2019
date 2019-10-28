import React from 'react'

import Link from 'gatsby-link'

class ProjectsAdvertisement extends React.Component {
  constructor(props) {
    super(props)
    this.count = this.props.count
    this.jsonLink = this.props.jsonLink
  }

  render() {
    return (
      <div>
        <div className="projectAdvertisementContainer"></div>
      </div>
    )
  }
}
export default ProjectsAdvertisement
