import React from 'react'
import { ThemeProvider, Flex, IconButton, Heading, Themed, useColorMode, Container } from 'theme-ui'
import { navigate } from 'gatsby'
import { useLocation } from '@reach/router';
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

import theme from '../style/Theme'
import { Section, ExternalLink } from '../common/Common';
import { SunIcon } from '../../images/sun'
import { MoonIcon } from '../../images/moon'

const ThemeToggle = () => {
    const [mode, setMode] = useColorMode()
    return (
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
    )
}

export const Header = () => {
    const { pathname } = useLocation()
    return (
        <Flex as="header" sx={{ pl: 1, pr: 1, pt: 4, justifyContent: "space-between", flexDirection: "row-reverse" }}>
            <ThemeToggle />
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

const Layout = ({ children }) => {
    deckDeckGoHighlightElement()
    return (
        <ThemeProvider theme={theme}>
            <Container variant='huge'>
                <Header />
                {children}
                <Section title="Contact">
                    <Themed.h5>
                        Feel free to reach out if you're looking for a software developer,
                        want to connect or have a question.
                    </Themed.h5>
                    <ExternalLink href="mailto:me@justinor.dev">
                        me@justinor.dev
                    </ExternalLink>

                    <ExternalLink href="https://github.com/xpire">
                        github/xpire
                    </ExternalLink>

                    <ExternalLink href="https://www.linkedin.com/in/justinor">
                        linkedin/in/justinor
                    </ExternalLink>
                </Section>
                <Section>
                    <Themed.h5 sx={{ fontWeight: "light", textTransform: "uppercase" }}>
                        © Justin Or | Made with Gatsby, Theme-ui and MDX.
                    </Themed.h5>
                    <Header />
                </Section>
            </Container>
        </ThemeProvider>

    )
}

export default Layout