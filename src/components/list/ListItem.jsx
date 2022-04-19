import React from "react"
import styled from "styled-components"
import { Typography, styled as muiStyled } from "@mui/material"
import BlurHashImage from "../style/BlurHashImage"

import { StyledTitleLink, CodePrefix } from "../style/PageStyle"

const StyledItemWrapper = styled.div`
  transition-duration: 0.3s;
  margin: var(--size-8) 0px;
`

const ItemWrapper = styled.div`
  :hover {
    ${StyledItemWrapper} {
      transform: scale(1.025);
    }

    ${CodePrefix} {
      text-decoration: underline;
    }
  }
`

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
