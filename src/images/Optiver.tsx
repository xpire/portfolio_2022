import React from "react"
import { motion } from "framer-motion"

const OptiverLogo = () => (
  <motion.svg
    viewBox={"0 0 50 50"}
    width="90px"
    height="90px"
    initial={{
      fillOpacity: 0,
    }}
    animate={{
      fillOpacity: 0.8,
    }}
    transition={{ duration: 3 }}
  >
    <motion.path
      fill="rgb(228, 96, 65)"
      stroke="rgb(228, 96, 65)"
      strokeWidth="1px"
      strokeOpacity="1"
      initial={{
        pathLength: 0,
      }}
      animate={{
        pathLength: 1,
      }}
      transition={{ duration: 3 }}
      d="M 11.681 35.627 L 20.241 16.077 L 28.771 35.627 L 11.681 35.627 Z M 23.761 2.627 L 21.401 2.627 L 19.001 8.007 L 4.871 40.307 L 40.201 40.307 L 23.761 2.627 Z"
    />
  </motion.svg>
)

export default OptiverLogo
