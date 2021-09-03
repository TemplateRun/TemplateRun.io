import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <a href="https://github.com/TemplateRun/TemplateRun.io/tree/main">View our repositories</a>
  </Layout>
)

export default SecondPage
