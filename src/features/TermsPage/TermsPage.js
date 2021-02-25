import React from "react"

// DLS
import {
  Typography,
  Wrapper,
  Footer,
} from "@noisytrumpet/osi-dls"

const TermsPage = ({ terms }) => {
    return(
      <Wrapper addClass="terms">
        <Typography variant="headline-2">Terms & Conditions</Typography>
        <Footer/>
      </Wrapper>
    )
}

export default TermsPage