import React from "react"
import MainPage from "../components/MainPage/MainPage"
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"
import BackgroundScene from "../components/BackgroundScene/BackgroundScene"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Join" />
      <BackgroundScene />
      <MainPage />
    </Layout>
  )
}

export default IndexPage
