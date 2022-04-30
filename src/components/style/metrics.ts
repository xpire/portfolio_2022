import { Theme } from 'theme-ui'

const metrics: Theme = {
  space: [0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
    512],
  sizes: {
    icon: 72,
    default: 750,
    mini: 570,
    small: 650,
    medium: 850,
    large: 930,
    huge: 1200
  },
  radii: {
    default: "5px",
    small: "5px",
    large: "10px",
    pill: "9999px"
  },
  layout: {
    container: {
      maxWidth: "default",
      width: "100%",
      mx: "auto",
      px: 3
    },
    mini: {
      variant: "layout.container",
      maxWidth: "mini"
    },
    small: {
      variant: "layout.container",
      maxWidth: "small"
    },
    medium: {
      variant: "layout.container",
      maxWidth: "medium"
    },
    large: {
      variant: "layout.container",
      maxWidth: "large"
    },
    huge: {
      variant: "layout.container",
      maxWidth: "huge"
    }
  }
};

export default metrics;