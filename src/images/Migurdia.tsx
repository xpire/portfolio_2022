import React from "react"
import { motion, SVGMotionProps } from "framer-motion"

const commonStyles: SVGMotionProps<SVGPathElement> = {
  strokeWidth: "0.0278012px",
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  strokeOpacity: "1",
  strokeMiterlimit: "4",
  strokeDasharray: "none",
  fillOpacity: "1"
};

const MigurdiaImage = ({ fill = "#000000" }: { fill: string }) => (
  <motion.svg
    width="100%"
    height="auto"
    style={{ maxHeight: "300px" }}
    viewBox="0 0 16.933333 25.399999"
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{ duration: 1.5 }}
  >
    <motion.path
      {...commonStyles}
      fill={fill}
      stroke={fill}
      d="M 8.5175085,25.086117 9.4741877,24.628968 V 13.115875 L 12.005402,9.3190548 8.5175085,0.33025364 5.0296143,9.3190548 7.5608295,13.115875 v 11.505068 z"
    />
    <motion.path
      initial={{
        rotate: -25,
        pathLength: 0,
      }}
      animate={{
        rotate: 0,
        pathLength: 1,
      }}
      transition={{ duration: 1.5 }}
      {...commonStyles}
      fill={fill}
      stroke={fill}
      d="m 8.5175086,25.086117 -1.9606151,-0.937201 1.1e-6,-1.374089 3.4105815,-1.248145 -6.1728529,-3.275776 v -1.37409 l 6.7060018,-3.892983 1.652829,-2.424303 4.34952,-0.334714 -2.409941,3.643097 -2.97367,0.218446 -6.0050421,3.429245 6.5053521,3.455292 v 1.374088 l -3.1021644,1.116888 z"
    />
    <motion.path
      initial={{
        rotate: 25,
        pathLength: 0,
      }}
      animate={{
        rotate: 0,
        pathLength: 1,
      }}
      transition={{ duration: 1.5 }}
      {...commonStyles}
      fill={fill}
      stroke={fill}
      d="m 8.5175086,25.086117 1.9606154,-0.937201 -10e-7,-1.374089 -3.4105824,-1.248145 6.1728534,-3.275776 v -1.37409 L 6.5343916,12.983833 4.8815626,10.55953 0.5320423,10.224816 l 2.4099413,3.643097 2.97367,0.218446 6.0050434,3.429245 -6.5053534,3.455292 v 1.374088 l 3.102165,1.116888 z"
    />
  </motion.svg>
)


export default MigurdiaImage
