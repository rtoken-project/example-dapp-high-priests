import React, { useState, useEffect } from "react"
import Loadable from "react-loadable"
import BackgroundScene from "../BackgroundScene/BackgroundScene"

import Layout from "../Layout/Layout"
import MainPage from "../MainPage/MainPage"
import Garden from "../Garden/Garden"
import SEO from "../seo"

import { PAGES } from "../constants"

// ============================
// ContentRouter CURRENTLY UNUSED
// Todo: delete

const LoadableDataProvider = Loadable({
  loader: () => import("./DataProvider"),
  loading: () => <></>,
  delay: 300, // 0.3 seconds
  timeout: 10000, // 10 seconds
})

const ContentRouter = () => {
  const [showGarden, setShowGarden] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URL(window.location.href).searchParams
      const growerAddress = params.get(PAGES.GARDEN)
      setShowGarden(growerAddress !== null)
    }
  }, [window.location.href])

  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundScene isGarden={showGarden} />
      {showGarden ? <Garden /> : <MainPage />}
    </Layout>
  )
}

export default ContentRouter
