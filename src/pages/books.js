import React from "react"
import { Link } from "gatsby"
import ButtonTest from 'react-bootstrap/Button';

import Layout from "../components/layout"
import Alert from 'react-bootstrap/Alert'

class books extends React.Component {
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

<ul class="list-group">
  <li class="list-group-item">Cras justo odio <Link  to="/books/steveJobs">steve</Link> <br/>  </li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
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
export default books
