import React from "react"
import BlurHashImage from "../style/BlurHashImage"
import styled from "@emotion/styled/macro"
import { Link } from "gatsby"
import { Box, Themed } from "theme-ui"

export const StyledTitleLink = styled(Link)`
  text-decoration: none;
`

export const CodePrefix = styled(Themed.code)`
  transition-duration: 0.3s;
`

export const StyledItemWrapper = styled(Box)`
  transition-duration: 0.3s;
  margin: var(--size-8) 0px;
`

export const ItemWrapper = styled(Box)`
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
        <CodePrefix
          sx={{ color: "muted", fontFamily: "monospace" }}
        >{`/${prefix}`}</CodePrefix>
        <Themed.h4 sx={{ m: 0 }}>{title}</Themed.h4>
      </StyledTitleLink>
      <Themed.p>{excerpt}</Themed.p>
    </ItemWrapper>
  )
}

export default ListItem
