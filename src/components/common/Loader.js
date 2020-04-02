import React from "react"
import styled, { keyframes } from "styled-components"
import PropTypes from "prop-types"
import LoaderImage from "./bars-rotate.svg"

const rotate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }

`

const LoaderContainer = styled.div`
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

const Loader = ({ size }) => {
  if (size === "small") {
    return (
      <SmallLoaderContainer>
        <img src={LoaderImage} />
      </SmallLoaderContainer>
    )
  }
  return (
    <LoaderContainer>
      <img src={LoaderImage} />
    </LoaderContainer>
  )
}

Loader.propTypes = {
  size: PropTypes.oneOf(["large", "small"]),
}
Loader.defaultProps = {
  size: "large",
}

export default Loader
