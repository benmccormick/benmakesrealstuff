import Typography from 'typography'
import DeYoung from 'typography-theme-de-young'

DeYoung.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
})

// delete DeYoung.googleFonts

const typography = new Typography(DeYoung)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
