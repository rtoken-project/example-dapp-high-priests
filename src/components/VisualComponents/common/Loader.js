import React from "react"
import styled, { keyframes } from "styled-components"
import LoaderImage from "../../../images/bars-rotate.svg"

const rotate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }

`

const LoaderContainer = styled.div`
  padding-top: 40px;
  img {
    animation: ${rotate} 2s linear infinite;
    padding: 20px;
  }
`

const SmallLoaderContainer = styled.div`
  max-width: 40px;

  img {
    max-width: 40px;
    padding: 0;
    margin: 0;
    animation: ${rotate} 2s linear infinite;
  }
`

export const Loader = () => {
  return (
    <LoaderContainer>
      <img src={LoaderImage} />
    </LoaderContainer>
  )
}

export const SmallLoader = () => {
  return (
    <SmallLoaderContainer>
      <img src={LoaderImage} />
    </SmallLoaderContainer>
  )
}
