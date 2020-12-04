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
    let showMap = new Map()
    showMap['tarantino'] = false;
    showMap['kubrick'] = false;
    this.state = { showMap: showMap }
    this.handleShown = this.handleShown.bind(this)

  }

  handleShown = (regista) => {
    console.log(this.state.showMap[regista])
    let temp = this.state.showMap
    temp[regista] = temp[regista] ? false : true
    console.log(temp[regista])
    this.setState({ showMap: temp })
  }

  render() {
    return (


      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <ul class="list-group list-group-flush ">
                <li onClick = {() =>this.handleShown( "tarantino")} class="list-group-item list-group-item-warning">
                  Tarantino- Cliccami
                  </li>
               { this.state.showMap["tarantino"] ? <><li  class="list-group-item">Django</li>
                <li class="list-group-item">Iene</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li></> : <div></div>}
              </ul>
            </div>
            <div className="col-6">
              <ul class="list-group list-group-flush ">
                <li id = "kubrick" onClick = {() =>this.handleShown( "kubrick")} class="list-group-item list-group-item-warning">
                kubrick - Cliccami
                  </li>
               { this.state.showMap["kubrick"] ? <><li  class="list-group-item">2001 odissea nello spazio</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li></> : <div></div>}
              </ul>
            </div>
          </div>
        </div>

      </Layout>


    )
  }
}
export default Movies
