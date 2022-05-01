import React from "react"
import { motion } from "framer-motion"
import { useColorMode } from "theme-ui"

import { svgVariants, pathVariants } from "../constants/animation"

const OptiverLogo = () => {
  const [mode] = useColorMode()
  return (
    <motion.svg
      viewBox={"0 0 50 50"}
      width="90px"
      height="90px"
      variants={svgVariants}
      initial="initial"
      animate={mode === "dark" ? "animated" : "selected"}
      whileHover={mode === "dark" ? "selected" : "animated"}
      transition={{ duration: 3 }}
    >
      <motion.path
        fill="rgb(228, 96, 65)"
        stroke="rgb(228, 96, 65)"
        strokeWidth="1px"
        strokeOpacity="1"
        variants={pathVariants}
        transition={{ duration: 1.5 }}
        d="M 11.681 35.627 L 20.241 16.077 L 28.771 35.627 L 11.681 35.627 Z M 23.761 2.627 L 21.401 2.627 L 19.001 8.007 L 4.871 40.307 L 40.201 40.307 L 23.761 2.627 Z"
      />
    </motion.svg>
  )
}

export default OptiverLogo
