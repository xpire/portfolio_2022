import React from 'react'
import { ThemeProvider, Flex, IconButton, Heading, Themed, useColorMode, Container, Close } from 'theme-ui'
import { navigate } from 'gatsby'
import { useLocation } from '@reach/router';

import theme from '../style/Theme'
import { SunIcon } from '../../images/sun'
import { MoonIcon } from '../../images/moon'

export const Header = () => {
    const [mode, setMode] = useColorMode()
    const { pathname } = useLocation()
    return (
        <Flex as="header" sx={{ pl: 1, pr: 1, pt: 4, justifyContent: "space-between", flexDirection: "row-reverse" }}>
            <IconButton
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                sx={{
                    height: "icon",
                    width: "icon",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Heading sx={{ fontSize: 6, m: 0, pb: 2 }}>J</Heading>
                {mode === "light" ? <SunIcon /> : <MoonIcon />}
            </IconButton>
            {pathname !== "/" && (
                <IconButton onClick={() => navigate("/")} sx={{ height: "icon", width: "icon", display: "flex", justifyContent: "flex-start" }}  >
                    <svg viewBox="0 0 1000 1000" height="32x" width="32px">
                        <path fill="var(--theme-ui-colors-text)" d="M230.5,499l496,491l43-54.8L284.9,444L230.5,499z" />
                        <path fill="var(--theme-ui-colors-text)" d="M286.6,554L750.9,64l-44.6-54L230.5,499.4L286.6,554z" />
                    </svg>
                </IconButton>
            )}
        </Flex>
    )
}

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Container variant='huge'>
            <Header />
            {children}
        </Container>
    </ThemeProvider>

)

export default Layout