import React from "react"
import Nav from "../components/Nav/Nav"
import "../../static/fonts/Baloo-2/css/baloo-2.css"
import "../../static/fonts/GTAmerica/css/styles.css"
import "../../static/fonts/icons/icomoon/style.css"

const Layout = ({ location, children }) => {
  //   let header
  let rootPath = `/`

  if (typeof __PREFIX_PATHS__ !== `undefined` && window.__PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`
  }

  return <App location={location}>{children}</App>
}

const App = ({ location, children }) => {
  return (
    <>
      <Nav />
      <div className={`app`}>{children}</div>
    </>
  )
}

export default Layout
