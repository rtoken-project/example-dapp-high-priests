import React from "react"
import styled from "styled-components"

const BackgroundContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  background-color: #121427;
  background-size: cover;
  background-position: 50% 100%;

  @media (max-width: 720px) {
    background-position: 0% 0%;
  }
`

const BackgroundScene = () => {
  return (
    <>
      <BackgroundContainer />
    </>
  )
}

export default BackgroundScene
