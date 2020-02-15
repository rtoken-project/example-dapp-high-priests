import React from "react"
import styled from "styled-components"

// import Img from "gatsby-image"
// import { useStaticQuery, graphql } from "gatsby"

import backgroundImage from "../../images/bg5.jpg"
// import first from "../../images/first.png"
// import second from "../../images/second.png"
// import third from "../../images/third.png"

const BackgroundContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: -8%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: 50% 100%;

  // img {
  //   max-width: 100%;
  //   max-height: 100%;
  //   position: absolute;
  //   left: -3%;
  //   top: 8%;
  //   @media (max-width: 720px) {
  //     left: -30%;
  //   }

  // }

  @media (max-width: 720px) {
    background-position: 0% 0%;
  }
`

const BackgroundScene = () => {
  // const image = useStaticQuery(graphql`
  //   query MyQuery {
  //     file(relativePath: { eq: "bg.jpg" }) {
  //       childImageSharp {
  //         fluid {
  //           sizes
  //           src
  //           base64
  //           aspectRatio
  //           srcSet
  //         }
  //       }
  //     }
  //   }
  // `)

  // Failed to make this work, as I can't use a component for "background-image"
  // const BackgroundImage = (
  //   <Img
  //     fluid={image.file.childImageSharp.fluid}
  //     alt="A forest of exotic trees"
  //   />
  // )

  return (
    <>
      <BackgroundContainer>
        {/* <img src={backgroundImage} /> */}
      </BackgroundContainer>
    </>
  )
}

export default BackgroundScene
