import React from "react"
import { Link } from "gatsby"
import ButtonTest from 'react-bootstrap/Button';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Alert from 'react-bootstrap/Alert' 



class Movies extends React.Component {
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


      <div className="styles.timeline">
      <div className="styles.container left">
        <div className="styles.content">
          <h2>2017</h2>
          <p>Lorem ipsum..</p>
        </div>
      </div>
      <div className="styles.container right">
        <div className="styles.content">
          <h2>2016</h2>
          <p>Lorem ipsum..</p>
        </div>
      </div>
    </div>



    )
  }
}
export default Movies
