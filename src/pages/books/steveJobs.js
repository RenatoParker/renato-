import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Image from 'react-bootstrap/Image'

const steveJobs = () => (
  <Layout>
    <SEO title="Steve." />
    <h1 style= {{fontSize: 200}} >  Steve.</h1>
    <h2  style= {{color: 'grey' , opacity: 50 , fontFamily: '"Lucida Console", "Courier New", monospace'}} >Read about Steve will not make you Steve.</h2>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Image src="a.png" thumbnail />
  </Layout>
)

export default steveJobs