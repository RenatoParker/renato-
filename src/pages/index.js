import React from "react"
import { Link } from "gatsby"
import ButtonTest from 'react-bootstrap/Button';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Alert from 'react-bootstrap/Alert'

const IndexPage = () => (
  <Layout>
   
    <SEO title="-renato-" />
    <Alert key='first_alert' variant='primary'>
    This is a test alert—check it out!
  </Alert>
    <h1>Hi this is a test with gatsby</h1>
    <p>Actually I added bootstrap!</p>
    <ButtonTest variant="primary">Primary</ButtonTest>{' '}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
