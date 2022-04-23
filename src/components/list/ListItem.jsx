import React from "react"
import { Typography } from "@mui/material"
import BlurHashImage from "../style/BlurHashImage"

import {
  StyledTitleLink,
  CodePrefix,
  StyledItemWrapper,
  ItemWrapper,
} from "../style/PageStyle"

const ListItem = ({ gatsbyImageData, blurHash, slug, title, excerpt }) => {
  const prefix = slug.match(/^\w+/)
  return (
    <ItemWrapper>
      <StyledTitleLink to={slug}>
        <StyledItemWrapper>
          <BlurHashImage
            gatsbyImageData={gatsbyImageData}
            blurHash={blurHash}
            imgStyle={{
              borderRadius: "inherit",
            }}
            style={{
              borderRadius: "var(--radius-xl)",
              position: "relative",
              zIndex: 0, // fix ios issue: https://stackoverflow.com/questions/66835241/gatsby-image-plugin-not-displaying-properly-on-ios-devices
            }}
            loading="eager"
            alt={`${title} image`}
          />
        </StyledItemWrapper>
        <Typography>
          <CodePrefix>{`/${prefix}`}</CodePrefix>
        </Typography>
        <Typography variant="h4">{title}</Typography>
      </StyledTitleLink>
      <Typography variant="body1">{excerpt}</Typography>
    </ItemWrapper>
  )
}

export default ListItem
