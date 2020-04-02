import React from "react"
import MainPage from "../components/MainPage/MainPage"
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Join" />
      <MainPage />
    </Layout>
  )
}

export default IndexPage
