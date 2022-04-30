import { Theme } from "theme-ui"
import theme, { headingStyles } from "./Theme"

const MDXTheme: Theme = {
    ...theme,
    styles: {
        ...theme.styles,
        h1: {
            ...headingStyles,
            fontSize: "3rem"
        },
        h2: {
            ...headingStyles,
            fontSize: "2.25rem",
        },
        h3: {
            ...headingStyles,
            fontSize: "1.5rem",
        },
        h4: {
            ...headingStyles,
            fontSize: "1.25rem",
        },
        h5: {
            ...headingStyles,
            fontSize: "1rem",
        },
        h6: {
            ...headingStyles,
            fontSize: "0.875rem",
        },
        strong: {
            fontWeight: "600"
        },
        ul: {
            margin: "1rem 0 1rem 0.9375rem",
            color: "text",
            padding: 0,
        },
        ol: {
            listStyleType: "decimal"
        },
        li: {
            marginBottom: "0.625rem",
            fontSize: "1em",
            lineHeight: "1.625em"
        },
        blockquote: {
            display: "block",
            width: "100%",
            px: 3,
            ml: 0,
            my: 3,
            lineHeight: "1.75",
            border: "1px solid",
            borderColor: "muted",
            bg: "background",
            color: "text",
            borderRadius: "default"
        },
        hr: {
            borderColor: "muted"
        },
        details: {
            bg: "muted"
        },
    }
}

export default MDXTheme;