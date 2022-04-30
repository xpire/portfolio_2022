import React from "react"
import { Box, Themed } from "theme-ui"

export const Section = ({ children, title }: { children: JSX.Element | JSX.Element[], title?: string }) => (
    <Box sx={{ mt: 5, mb: 5, ml: "auto", mr: "auto" }}>
        {title && <Themed.h2>{title}</Themed.h2>}
        {children}
    </Box>
)

export const ExternalLink = ({ children, href }) => (
    <Themed.a href={href} target="_blank" rel="noopener">
        <Themed.h5 sx={{ mb: 3, mt: 3 }}>{children}</Themed.h5>
    </Themed.a>
)
