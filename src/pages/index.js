import React from "react"
import { Link } from "gatsby"
import ButtonTest from 'react-bootstrap/Button';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Alert from 'react-bootstrap/Alert'

class IndexPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {shown: false}
    this.handleShown = this.handleShown.bind(this)

  }

  handleShown = () =>{
    console.log("shown:" + this.state.shown)
    let temp = this.state.shown ? false : true
    this.setState({shown: temp})
  }





// modifyShown = () =>{
//   console.log("ciao");
//  // shown = shown ? false : true;
// }

render () {
  return(

  
      <Layout>
       
        <SEO title="-renato-" />
        <Alert show = {this.state.shown} key='first_alert' variant='primary'>
        This is a test alert—check it out!
      </Alert>
        <h1>Hi this is a test with gatsby</h1>
        <p>Actually I added bootstrap!</p>
        <ButtonTest onClick={this.handleShown} variant="primary">Primary</ButtonTest>{' '}
        <button onClick = {this.handleShown}>ciao</button>
        
        {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
    
    
        </div>*/}
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
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
