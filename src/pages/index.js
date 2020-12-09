import React from "react"
import { Link } from "gatsby"
import ButtonTest from 'react-bootstrap/Button';

import Layout from "../components/layout"

import SEO from "../components/seo"
import Alert from 'react-bootstrap/Alert'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { shown: false }
    this.handleShown = this.handleShown.bind(this)

  }

  handleShown = () => {
    let temp = this.state.shown ? false : true
    this.setState({ shown: temp })
  }

  render() {
    return (


      <Layout>

        <SEO title="-renato-" />

        <h1 style={{
            color: `Indigo`,
            textDecoration: `none`,
          }}>Perchè questo sito?</h1>
        <p>Ispirato da ..... (to be completed)</p>
        <ButtonTest onClick={this.handleShown} variant="primary">CLICCA!!!</ButtonTest>{' '}



        {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
    
    
        </div>*/}

        <Alert show={this.state.shown} key='first_alert' variant='warning'>
          Sto ancora lavorando! Ecco a te un bellisssimo caricamento:
      </Alert>
        {this.state.shown ? <div show={this.state.shown} class="loader"></div> : <></>}
       
      </Layout>


    )
  }


  // const IndexPage = () => (

  //   <Layout>

  //     <SEO title="-renato-" />
  //     <Alert show = {shown} key='first_alert' variant='primary'>
  //     This is a test alert—check it out!
  //   </Alert>
  //     <h1>Hi this is a test with gatsby</h1>
  //     <p>Actually I added bootstrap!</p>
  //     <ButtonTest onclick={test2()} variant="primary">Primary</ButtonTest>{' '}
  //     <button onclick = {test}>ciao</button>

  //     {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //       <Image />


  //     </div>*/}
  //     <Link to="/page-2/">Go to page 2</Link> <br />
  //     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  //   </Layout>
  // )
}
export default IndexPage
