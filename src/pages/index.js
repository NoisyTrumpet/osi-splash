import React from "react"
import { Logo, Typography } from "@noisytrumpet/osi-dls"

export default function Home() {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <Logo
        variant="regular"
        title="Logo Title"
        description="Logo Description"
        animated
      />
      <Typography variant="headline-1" textAlign="center">
        OsiLIFE
      </Typography>
    </div>
  )
}
