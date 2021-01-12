import React from "react"
import Img from "gatsby-image"

const Image = props => {
  if (!props.fluid) {
    return <div>Picture not found</div>
  }

  return <Img {...props} />
}

export default Image
