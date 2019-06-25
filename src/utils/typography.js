import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
import doelgerTheme from 'typography-theme-doelger'

doelgerTheme.overrideThemeStyles = () => {
  return {
    "a": {
      boxShadow: `none`,
      textShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(doelgerTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
