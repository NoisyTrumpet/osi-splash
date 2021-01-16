import React from "react"
import { Logo, Typography } from "@noisytrumpet/osi-dls"

export default function Home() {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
      }}
    >
      <Logo
        variant="horizontal"
        tagline="Splash Page"
        title="OSI-LIFE"
        description="OSI-LIFE Logo with tagline"
      />
    </div>
  )
}
