import React from "react"
import MigurdiaImage from "../images/Migurdia"
import { Themed } from "theme-ui"

const Error = () => {
  return (
    <>
      <MigurdiaImage fill={"var(--theme-ui-colors-text)"} />
      <Themed.h1>404</Themed.h1>
      <Themed.h3>This page has disappeared...</Themed.h3>
    </>
  )
}

export default Error
