import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlurHashImage = ({ gatsbyImageData, blurHash, ...props }) => (
  <GatsbyImage
    image={{
      ...getImage(gatsbyImageData),
      placeholder: {
        fallback: blurHash.base64Image,
      },
    }}
    {...props}
  />
)

export default BlurHashImage
