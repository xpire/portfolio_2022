import React from "react"
import {
  Typography,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material"

let theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: "var(--size-10)",
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: "3.3rem",
    },
    h2: {
      fontSize: "2.2rem",
    },
    h3: {
      fontSize: "2rem",
      marginBottom: "35px",
    },
    h4: {
      fontSize: "1.7rem",
    },
    h5: {
      fontSize: "1.5rem",
    },
    h6: {
      fontSize: "1.2rem",
    },
    subtitle1: {
      fontSize: "1.1rem",
      fontWeight: "bold",
    },
    subtitle2: {
      fontSize: "1rem",
    },
    body1: {
      fontSize: "1.2rem",
    },
    body2: {
      fontSize: "1rem",
    },
  },
})

theme = responsiveFontSizes(theme)

export const MDXThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export const MDXProviderComponents = {
  h1: (props) => <Typography variant="h1" gutterBottom {...props} />,
  h2: (props) => <Typography variant="h2" gutterBottom {...props} />,
  h3: (props) => <Typography variant="h3" gutterBottom {...props} />,
  h4: (props) => <Typography variant="h4" gutterBottom {...props} />,
  h5: (props) => <Typography variant="h5" gutterBottom {...props} />,
  h6: (props) => <Typography variant="h6" gutterBottom {...props} />,
  p: (props) => (
    <Typography variant="body1" paragraph gutterBottom {...props} />
  ),
  li: (props) => (
    <li>
      <Typography variant="body1" paragraph gutterBottom {...props} />
    </li>
  ),
}
