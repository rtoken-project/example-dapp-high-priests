import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"
import Loadable from "react-loadable"

const Loading = props => {
  if (props.error) {
    return (
      <div>
        Error! <button onClick={() => location.reload()}>Retry</button>
      </div>
    )
  } else if (props.pastDelay) {
    return <div></div>
  } else if (props.timedOut) {
    return (
      <div>
        Taking a long time...{" "}
        <button onClick={() => location.reload()}>Retry</button>
      </div>
    )
  } else {
    return null
  }
}

const LoadableHighPriest = Loadable({
  loader: () => import("../components/HighPriest/HighPriest"),
  loading: Loading,
  delay: 300, // 0.3 seconds
  timeout: 10000, // 10 seconds
})

const HighPriestPage = () => {
  return (
    <Layout>
      <SEO
        title="My Grove"
        description="Check out my grove here."
        image="https://imgur.com/ldBwSph.png"
      />
      <LoadableHighPriest />
    </Layout>
  )
}

export default HighPriestPage
