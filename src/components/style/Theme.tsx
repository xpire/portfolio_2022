import { roboto } from '@theme-ui/presets'
import { Theme } from 'theme-ui'
import metrics from './metrics'
import fonts from './fonts'

export const headingStyles = {
  color: "text",
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
}

const theme: Theme = {
  initialColorModeName: "light",
  ...metrics,
  ...fonts,
  colors: {
    text: "#202124",
    background: "#fff",
    primary: "#1a73e8",
    secondary: "#9c27b0",
    muted: "#767c89",
    modes: {
      dark: {
        text: "#fff",
        background: "#202124",
        primary: "#1a73e8",
        secondary: "#9c27b0",
        muted: "#a5aab4",
      }
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      ...headingStyles,
      fontSize: [7, null, 8]
    },
    h2: {
      ...headingStyles,
      fontSize: [6, null, 7]
    },
    h3: {
      ...headingStyles,
      fontSize: [5, null, 6]
    },
    h4: {
      ...headingStyles,
      fontSize: [4, null, 5]
    },
    h5: {
      ...headingStyles,
      fontSize: [3, null, 4]
    },
    h6: {
      ...headingStyles,
      fontSize: 2
    },
    p: {
      color: "text",
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    a: {
      color: "primary"
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit"
      }
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    img: {
      maxWidth: "100%"
    }
  }
}

export default theme;