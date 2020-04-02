import React from "react"
import styled from "styled-components"

import Loader from "./Loader"

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "roobert_semibold", sans-serif;
  font-size: 24px !important;
  color: white;
  margin-top: 32px;
`

const UnlockWalletPrompt = () => (
  <LoaderContainer>
    <Loader />
    <h3>Loading</h3>
    <p>(Please unlock your wallet)</p>
  </LoaderContainer>
)

export default UnlockWalletPrompt
