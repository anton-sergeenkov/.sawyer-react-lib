import { theme as themeLightViolet } from "./themes/light-violet"
import { theme as themeDefault } from "./themes/default"

const themes = ["light-violet"]

export const getTheme = (theme) => {
  switch (theme) {
    case "light-violet":
      return themeLightViolet
    default:
      return themeDefault
  }
}

const stylesButtonHover = {
  ":hover": {
    background: "none",
  },
}

const stylesTextDisabled = {
  color: "var(--color-gray)",
}

export const getStyles = (props) => {
  const { mode, isAccent, isActive, isHoverTransparent, isDisabled } = props

  const {
    // Button
    StylesButtonDefault,
    StylesButtonAccent,
    StylesButtonActive,
    // Text
    StylesTextDefault,
    StylesTextAccent,
    StylesTextActive,
  } = getTheme(mode)

  const stylesButton = {
    ...StylesButtonDefault,
    ...(isAccent && StylesButtonAccent),
    ...(!isAccent && isActive && StylesButtonActive),
    ...(isHoverTransparent && stylesButtonHover),
  }

  const stylesText = {
    ...StylesTextDefault,
    ...(isAccent && StylesTextAccent),
    ...(!isAccent && isActive && StylesTextActive),
    ...(isDisabled && stylesTextDisabled),
  }

  return {
    stylesButton,
    stylesText,
  }
}
