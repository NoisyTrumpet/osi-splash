import React from "react"

export default ({ data }) => (
  <div>
    <div>
      <h3>{data.name}</h3>
      <p>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div>
  </div>
)
