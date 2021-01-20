import React from 'react'
import { Link } from 'gatsby'
import { Shell } from '@noisytrumpet/osi-dls'
import '../styles/main.scss'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && window.__PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return <Shell contained>{children}</Shell>
  }
}

export default Template
