import React from "react"

import styled from "styled-components"
import Layout from "../components/Layout/Layout"
import { MissingDappy } from "../components/Flock/VisualComponents"
import SEO from "../components/seo"

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  backgroundcolor: #121427;
`

const H1 = styled.h1`
  position: relative;
  font-family: "roobert_medium", sans-serif;
  font-weight: 900;
  letter-spacing: -0.3px;
  font-size: 56px;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  color: white;
  padding-top: 120px;

  @media (max-width: 500px) {
    padding-top: 80px;
    font-size: 36px;
  }
`

const P = styled.p`
  position: relative;
  font-family: "roobert_medium", sans-serif;
  font-size: 22px;
  max-width: 550px;
  margin: 15px auto 15px;
  line-height: 1.3;
  opacity: 0.7;
  text-align: center;
  color: white;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`

const StopPage = () => (
  <Layout>
    <SEO title="Stop Donating" />
    <CenteredContainer>
      <div>
        <H1>Farewell, devoted member of the flock</H1>
        <P>Thanks for donating!</P>
        <MissingDappy />
      </div>
    </CenteredContainer>
  </Layout>
)

export default StopPage
