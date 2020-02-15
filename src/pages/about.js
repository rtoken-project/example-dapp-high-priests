import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import { HowItWorks } from "../components/HowItWorks/HowItWorks"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <HowItWorks />
  </Layout>
)

export default AboutPage
