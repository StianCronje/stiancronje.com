import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import '../styles/global.css'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className='center'>
      <h1>
        Hello World!
      </h1>
    </div>
  </Layout>
)

export default IndexPage
