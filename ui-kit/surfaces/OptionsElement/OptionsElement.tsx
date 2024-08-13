"use client"

import { useState } from "react"
import cn from "classnames"
import { IconButton, Menu, MenuItem } from "@mui/material"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { LinkElement } from "@/sawyer-react-lib/ui-kit"

import styles from "./OptionsElement.module.css"

interface IOptionsElementOptions {
  name: string // Website
  link: string // https://letscode-dev.github.io/
}

interface IOptionsElementClasses {
  container: string
  icon: string
  link: string
}

interface IOptionsElement {
  options: IOptionsElementOptions[]
  classes?: IOptionsElementClasses
}

const OptionsElement: React.FC<IOptionsElement> = (props) => {
  const {
    options,
    classes = {
      container: "",
      button: "",
      icon: "",
      link: "",
    },
  } = props

  const [anchorEl, setAnchorEl] = useState<(EventTarget & Element) | null>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.SyntheticEvent): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  return (
    <div className={cn(styles.container, classes.container)}>
      <IconButton onClick={handleClick} className={styles.button}>
        <MoreVertIcon className={cn(styles.icon, classes.icon)} />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((element, index) => (
          <MenuItem
            key={index}
            onClick={handleClose}
            sx={{ minHeight: "auto" }}
          >
            <LinkElement
              href={element.link}
              theme={{
                mode: "dark-underlined",
              }}
              className={cn(styles.link, classes.link)}
            >
              {element.name}
            </LinkElement>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default OptionsElement