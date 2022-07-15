import React from 'react'

let ProjectPreviewImage = function statelessFunctionComponentClass(props) {
  let imageURL = './../images/' + props.image

  // let imageURL = './../assets/' + props.image

  return (
    //if prop title contains "motion design" then display block else none
    <div>
      <img
        className="projectImage"
        src={__PATH_PREFIX__ + imageURL}
        alt={imageURL}
      />
    </div>
  )
}

export default ProjectPreviewImage
