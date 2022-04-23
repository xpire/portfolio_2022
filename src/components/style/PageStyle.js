import React from "react"
import styled from "@emotion/styled/macro"
import { Link } from "gatsby"
import {
  ThemeProvider as MuiThemeProvider,
  createTheme as muiCreateTheme,
  responsiveFontSizes,
  Typography,
  Grid,
  Container,
  styled as muiStyled,
  Link as muiLink,
} from "@mui/material"
import "pollen-css"

const muiTheme = muiCreateTheme({})

const responsiveTheme = responsiveFontSizes(muiTheme, { factor: 2 })

export const PageThemeProvider = ({ children }) => {
  return <MuiThemeProvider theme={responsiveTheme}>{children}</MuiThemeProvider>
}

export const PageContainer = ({ children }) => (
  <Container
    maxWidth="xl"
    sx={{
      padding: {
        xs: "0px",
        sm: "var(--size-5)",
        md: "var(--size-10)",
      },
    }}
  >
    <PageThemeProvider>
      <Header />
      {children}
      <Footer />
    </PageThemeProvider>
  </Container>
)

export const StyledTitleLink = styled(Link)`
  text-decoration: none;
  color: black;
`

export const CodePrefix = styled.code`
  transition-duration: 0.3s;
  color: var(--color-grey-500);
`

export const StyledItemWrapper = styled.div`
  transition-duration: 0.3s;
  margin: var(--size-8) 0px;
`

export const ItemWrapper = styled.div`
  :hover {
    ${StyledItemWrapper} {
      transform: scale(1.025);
    }

    ${CodePrefix} {
      text-decoration: underline;
    }
  }
`

export const StyledLink = muiStyled(muiLink)`
  color: var(--color-grey-500);
  text-decoration-color: var(--color-grey-300);
  `
export const ExternalLink = ({ href, children, ...props }) => (
  <StyledLink href={href} target="_blank" rel="noopener">
    <Typography {...props}>{children}</Typography>
  </StyledLink>
)

//styledMui(Container)`
const StyledHeader = styled.div`
  //   position: fixed;
  //   top: 0px;
  //   left: 0px;
  //   right: 0px;
  //   width: 100%;
  //   z-index: var(--layer-1);
  //   backdrop-filter: blur(10px);
`

export const Header = () => (
  <StyledHeader
    maxWidth="xl"
    // sx={{
    //   padding: {
    //     xs: "var(--size-5) 0px",
    //     sm: "var(--size-5) var(--size-5)",
    //     md: "var(--size-5) var(--size-10)",
    //   },
    // }}
  >
    <Grid container justifyContent="space-between">
      <Grid item>
        <StyledTitleLink to="/">
          <Typography variant="h5">JO</Typography>
        </StyledTitleLink>
      </Grid>
      <Grid item></Grid>
    </Grid>
  </StyledHeader>
)

export const Footer = () => (
  <Section>
    <Typography variant="overline">
      © 2020 Justin Or | Made with Gatsby and mdx.
    </Typography>
  </Section>
)

export const Button = styled.button``

export const Section = styled.div`
  margin: var(--size-20) auto;
`