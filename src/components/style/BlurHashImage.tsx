import React from "react"
import { GatsbyImage, getImage, ImageDataLike, GatsbyImageProps } from "gatsby-plugin-image"

type BlurHashImageProps = {
  gatsbyImageData: ImageDataLike
  blurHash: {
    base64Image: string
    blurhash: string
  }
  alt: string
}

const BlurHashImage = ({ gatsbyImageData, blurHash, alt, ...props }: BlurHashImageProps & GatsbyImageProps) => (
  <GatsbyImage
    image={{
      ...getImage(gatsbyImageData),
      placeholder: {
        fallback: blurHash.base64Image,
      },
    }}
    alt={alt}
    {...props}
  />
)

export default BlurHashImage
