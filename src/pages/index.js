import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../sections/general/Footer"
import Navbar from "../sections/general/navigation"
import Sidebar from "../sections/general/navigation/sidebar"
import Timeline from "../sections/general/timeline"
import About from "../sections/general/AboutUs"
// import Banner from "../sections/general/banner"
import {arraylists}  from "../sections/general/timeline/data"


const IndexPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "TemplateRun",
    url: "https://templaterun.github.io/TemplateRun.io/",
    logo: "https://github.com/TemplateRun/TemplateRun.io/blob/7dbd32d08a8bf01a903c531bfcb0755fe4b9cac8/.github/assets/images/TR%20LOGO%20new.png",
    sameAs: ["https://github.com/TemplateRun"],
  }
  return (
    <div>
      <Seo
        title="TemplateRun"
        description="Need a Template, we got you fam"
        schemaMarkup={schema}
      />
      <Layout>
        <Navbar />
        <Sidebar />
        {/* <Banner  /> */}
        <Timeline items={arraylists} />
        <About />
        <Footer />
      </Layout>
</div>
  )
}

export default IndexPage
