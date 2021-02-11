import React from "react"
import { Shell } from "@noisytrumpet/osi-dls"
import "../styles/main.scss"

class Template extends React.Component {
  render() {
    const { children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && window.__PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return <Shell>{children}</Shell>
  }
}

export default Template
